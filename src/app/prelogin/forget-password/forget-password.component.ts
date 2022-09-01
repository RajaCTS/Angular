import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Buttonlist } from 'src/app/shared/interface/buttonlist';
import { Dynform } from 'src/app/shared/interface/dynform';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OtpComponent } from 'src/app/shared/otp/otp.component';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  public forgetpwdObj: Dynform[] = [
    {
      label: "Mobile Number",
      type: "text",
      value: "",
      validation:{
        required: true,
        minlength: 10
      },
      errormsg:{
        required: "Mobile number is required",
        minlength: "Enter valid mobile number"
      },
      iconName: "stay_primary_portrait",
      controlName: "mobile"
    }
  ];
  public button: Buttonlist[] = [
    {
      name: "Reset",
      color: "primary"
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  formSubmitted(event: any){
    console.log(event);
      this.dialog.open(OtpComponent).afterClosed().subscribe(data=>{
        console.log(data)
      })
  }
}
