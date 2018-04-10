import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginWrapperComponent} from './login-wrapper.component';
import { RouterModule } from '@angular/router';

import { LoginModule } from '@dosandk/shared-modules';
console.error('LoginModule', LoginModule);
@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LoginWrapperComponent }
    ]),
  ],
  declarations: [LoginWrapperComponent],
  exports: [LoginWrapperComponent]
})
export class LoginWrapperModule { }
