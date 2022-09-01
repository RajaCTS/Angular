import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prelogin', loadChildren: ()=> import('./prelogin/prelogin.module').then(m => m.PreloginModule)
  },
  {
    path: 'postlogin', loadChildren: ()=> import('./postlogin/postlogin.module').then(mod => mod.PostloginModule)
  },
  {
    path: '', redirectTo:'prelogin', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
