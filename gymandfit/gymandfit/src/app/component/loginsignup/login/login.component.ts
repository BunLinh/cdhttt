import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' , '../../../../assets/util.css'],
  
  
})
export class LoginComponent implements OnInit {
  form: FormGroup;
private username:string;
private password:string;
private colorCheck : String;
private msg : String;
private isCheck : boolean = false;
private role:string;
constructor(
  private fb: FormBuilder,
) {

  //validate
  this.form = fb.group({
    })
  }

  ngOnInit() {
  }
  logginUser(event){
   
  }
}
