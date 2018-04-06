import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { BaseComponent } from './components/base/';

export const appRoutes: Routes = [
  {
    path: '',
    component: BaseComponent,
    pathMatch: 'full'
  }, {
    path: 'login',
    loadChildren: './modules/login-shared/src/login-shared.module#LoginSharedModule'
  }
];

export const AppRouterModule = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
);
