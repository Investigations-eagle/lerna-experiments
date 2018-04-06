import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSharedComponent } from './login-shared.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [{
  path: 'login',
  children: [
    {
      path: '',
      component: LoginSharedComponent
    },
    {
      path: 'privacy-policy',
      component: PrivacyPolicyComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSharedRoutingModule { }
