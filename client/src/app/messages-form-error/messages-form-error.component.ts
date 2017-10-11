import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-messages-form-error',
  templateUrl: './messages-form-error.component.html',
  styleUrls: ['./messages-form-error.component.css']
})
export class MessagesFormErrorComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;

  constructor() { }

  ngOnInit() {
  }

}
