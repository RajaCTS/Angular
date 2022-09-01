import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloginRoutingModule } from './prelogin-routing.module';

import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { PreloginComponent } from './prelogin/prelogin.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    PreloginComponent
  ],
  imports: [
    CommonModule,
    PreloginRoutingModule,
    SharedModule
  ]
})
export class PreloginModule { }
