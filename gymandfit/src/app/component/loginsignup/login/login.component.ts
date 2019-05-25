import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styleUrls: ['../../../../assets/util.css'],
  
})
export class LoginComponent implements OnInit {
private username:string;
private password:string;
private colorCheck : String;
private msg : String;
private isCheck : boolean = false;
private role:string;
  constructor() { }

  ngOnInit() {
  }
  logginUser(event){
   
  }
}
