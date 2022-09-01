import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  public otpField = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)]))
  public timeOver: boolean;
  public timer: number;

  constructor(
    public dialogRef: MatDialogRef<OtpComponent>
  ) { }

  ngOnInit(): void {
    this.timer = 30;
  }

  public resetTimer(event: boolean){
    this.timeOver = event;
    this.timer = 0;
  }

  public resendOTP(){
    this.timeOver = false;
    this.timer = 30;
    this.otpField.markAsUntouched();
  }

  public otpSubmit(){
    if(this.otpField.value){
      const data = {
        otp: this.otpField.value
      }
      this.dialogRef.close(data);
    }
  }

}
