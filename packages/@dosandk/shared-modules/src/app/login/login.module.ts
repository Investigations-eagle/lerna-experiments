import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSharedRoutingModule } from './login-shared-routing.module';
import { LoginSharedComponent } from './login-shared.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  imports: [
    CommonModule,
    LoginSharedRoutingModule
  ],
  declarations: [LoginSharedComponent, PrivacyPolicyComponent],
  exports: [LoginSharedComponent, LoginSharedRoutingModule]
})
export class LoginSharedModule { }
