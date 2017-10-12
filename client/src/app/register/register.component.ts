import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Sign up for a free trial";

  registerForm : FormGroup;
  submitted : boolean = false;
  message;
  messageClass;
  processing = false;

  constructor(
      private router : Router,
      private formBuilder : FormBuilder,
      private userService : UserService
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm (){
    this.registerForm = this.formBuilder.group({
      registerName: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(36), this.validateName])],
      registerEmail: ['', Validators.compose([Validators.required, Validators.email])],
      registerPhone: ['', Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(12),this.validatePhone])],
      registerPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(35),this.validatePassword])],
      registerRePassword: ['', Validators.required]
    }, { validator : this.matchingPasswords('registerPassword','registerRePassword')});
  }

  enableForm() {
    this.registerForm.controls['registerName'].enable();
    this.registerForm.controls['registerEmail'].enable();
    this.registerForm.controls['registerPhone'].enable();
    this.registerForm.controls['registerPassword'].enable();
    this.registerForm.controls['registerRePassword'].enable();
  }

  disableForm() {
    this.registerForm.controls['registerName'].disable();
    this.registerForm.controls['registerEmail'].disable();
    this.registerForm.controls['registerPhone'].disable();
    this.registerForm.controls['registerPassword'].disable();
    this.registerForm.controls['registerRePassword'].disable();
  }

  validateName(controls){
    const regExp = new RegExp(/^([a-zA-Z0-9 ])+$/);
    if(regExp.test(controls.value)){
      return null;
    }else {
      return { 'validateName': true }
    }
  };

  validatePhone(controls){
    const regExp = new RegExp(/^([0-9]).{10,12}$/);
    if(regExp.test(controls.value)){
      return null;
    }else {
      return { 'validatePhone': true }
    }
  };
  validatePassword(controls){
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[\d]).{8,35}$/);
    if (regExp.test(controls.value)){
      return null;
    }else {
      return {'validatePassword' : true}
    }
  }
  matchingPasswords(password, confirm){
    return (group : FormGroup) => {
      if(group.controls[password].value === group.controls[confirm].value){
        return null;
      }else {
        return { 'matchingPasswords' : true }
      }
    }
  }

  onRegisterSubmit(){
      this.processing = true;
      this.disableForm();

      const user = {
        registerName : this.registerForm.get("registerName").value,
        registerEmail : this.registerForm.get("registerEmail").value,
        registerPhone : this.registerForm.get("registerPhone").value,
        registerPassword : this.registerForm.get("registerPassword").value,
      }

      this.userService.registerUser(user)
          .then(response => {
            if( !response.success ){
              this.processing = false;
              this.message = response.message;
              this.messageClass = "alert alert-danger";
              this.enableForm();
            }else {
              this.messageClass = "alert alert-success";
              this.message = response.message;
              setTimeout(()=>{
                this.router.navigate(['/login']);
              }, 2000);
            }
          });
  }



}
