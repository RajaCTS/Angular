import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dynform } from 'src/app/shared/interface/dynform';

@Component({
  selector: 'app-prelogin',
  templateUrl: './prelogin.component.html',
  styleUrls: ['./prelogin.component.scss']
})
export class PreloginComponent implements OnInit {
  public index: number;
  public resetPwdClicked: boolean;
  public signupForm: Dynform[] = [
    {
      label: "Name",
      type: "text",
      value: "",
      validation:{
        required: true
      },
      errormsg:{
        required: "Name field is required"
      },
      iconName: "person",
      controlName: "userName"
    },
    {
      label: "E-mail",
      type: "text",
      value: "",
      validation:{
        required: true,
        pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$"
      },
      errormsg:{
        required: "Email is required",
        pattern: "Enter valid email address"
      },
      iconName: "email",
      controlName: "email"
    },
    {
      label: "Password",
      type: "password",
      value: "",
      validation:{
        required: true,
        minlength: 8
      },
      errormsg:{
        required: "Password is required",
        minlength: "Minimum length not satisfied"
      },
      iconName: "lock",
      controlName: "pwd"
    },
    {
      label: "Retype Password",
      type: "password",
      value: "",
      validation:{
        required: true,
        minlength: 8
      },
      errormsg:{
        required: "Retype password is required",
        minlength: "Minimum length not satisfied"
      },
      iconName: "lock",
      controlName: "rePwd"
    }
  ]
  public loginBtn = [
    {
      name: "Login",
      color: "primary"
    }
  ]
  public signupBtn = [
    {
      name: "Sign up",
      color: "primary"
    }
  ]
  public loginForm: Dynform[] = [
    {
      label: "Email",
      type: "text",
      value: "",
      validation:{
        required: true
      },
      errormsg:{
        required: "Email is required"
      },
      iconName: "emial",
      controlName: "email"
    },
    {
      label: "Password",
      type: "password",
      value: "",
      validation:{
        required: true,
        minlength: 8
      },
      errormsg:{
        required: "Password is required",
        minlength: "Minimum length not satisfied"
      },
      iconName: "lock",
      controlName: "password"
    }
  ]

  public sideMenu = [
    {
      id: '0',
      name: 'SIGN IN',
    },
    {
      id: '1',
      name: 'SIGN UP',
    },
  ];

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.index = 0;
    this.resetPwdClicked = false;
  }

  changeIndex(index: any){
    this.index = index;
  }

  resetPwdClick(){
    this.resetPwdClicked = true;
    this.router.navigate(['/prelogin/forgetpwd'])
  }
  

}
