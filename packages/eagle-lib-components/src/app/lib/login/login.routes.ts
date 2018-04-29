import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const moduleRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

export const LocalRouterModule: ModuleWithProviders = RouterModule.forChild(
  moduleRoutes
);
