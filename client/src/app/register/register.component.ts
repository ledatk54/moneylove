import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Sign up for a free trial";

  registerForm : FormGroup;
  submitted : boolean = false;

  constructor(
      private router : Router,
      private formBuilder : FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm (){
    this.registerForm = this.formBuilder.group({
      registerName: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      registerPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      registerRePassword: '',
      registerPhone: '',
      registerEmail: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }
  onRegisterSubmit(){
      console.log(this.registerForm);
  }
  isFieldValid(field:string){
    return !this.registerForm.get(field).valid && !this.registerForm.get(field).touched;
  }

}
