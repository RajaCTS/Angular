import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DynamicPopupComponent } from 'src/app/shared/dynamic-popup/dynamic-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
  

export class LoginComponent implements OnInit {
  public index: number;
  public resetPwdClicked: boolean;
  public loginPage: any;  

  constructor(private router: Router, private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.index = 0;
    this.resetPwdClicked = false;
    this.http.get('http://localhost:3000/prelogin').subscribe(resData=>{
      this.loginPage = resData;
    })
  }

  resetPwdClick() {
    this.resetPwdClicked = true;
    this.router.navigate(['/prelogin/forgetpwd'], {skipLocationChange: true});
  }

  login(event: FormGroup) {
    this.http.post('http://localhost:3000/prelogin/login',event.value, { responseType: 'text' })
    .subscribe((data) => {
      this.router.navigate(['/postlogin'])
    },(error)=>{
      this.dialog.open(DynamicPopupComponent,{
        data: JSON.parse(error.error),
        panelClass: "error-popup",
        width: "20%",
        height: "30%",
        disableClose: true
      }).afterClosed().subscribe(()=>{
        event.reset();
      });
    });
  }

  signup(event: any) {
    this.http
      .post('http://localhost:3000/prelogin/', event, { responseType: 'text' })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
