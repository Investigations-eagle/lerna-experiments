import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/';

// Fix for AOT compiler
// export function loadLoginSharedModule() {
//   return System
//     .import('@eagle/ui-kit')
//     .then(({ LoginSharedModule }) => LoginSharedModule);
// }

declare const System: any;

export const appRoutes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'login',
    loadChildren: './login-wrapper/login-wrapper.module#LoginWrapperModule'
  }
];

export const AppRouterModule = RouterModule.forRoot(
  appRoutes,
  // { enableTracing: true } // <-- debugging purposes only
);
