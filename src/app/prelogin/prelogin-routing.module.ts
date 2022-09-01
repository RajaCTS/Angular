import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { PreloginComponent } from './prelogin/prelogin.component';

const routes: Routes = [
  {
    path: '',
    component: PreloginComponent,
    children: [
      { 
        path: '', redirectTo: 'login', pathMatch: 'full' 
      },
      { 
        path: 'forgetpwd', component: ForgetPasswordComponent 
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreloginRoutingModule {}
