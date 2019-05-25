import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//validate
import {
  nameValidate,
  dateValidate,
  phoneValidate,
  passportNumberValidate,
  emailValidate,
  atmNumberValidate,
} from './../validation';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
//validate
form: FormGroup;
name: string;
birthday: string;
phone: string;
address: string;
email: string;
atmNumber: string;

titleAlert: String = 'Thông tin không hợp lệ';

constructor(
  private fb: FormBuilder,
) {

  //validate
  this.form = fb.group({
    'name': [null, nameValidate],
    'birthday': [null, dateValidate],
    'phone': [null, phoneValidate],
    'address': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
    'email': [null, emailValidate],
    'atmNumber': [null, atmNumberValidate],

  })
}

ngOnInit() {

}
}