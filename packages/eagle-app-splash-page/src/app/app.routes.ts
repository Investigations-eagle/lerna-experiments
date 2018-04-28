import { RouterModule, Routes } from '@angular/router';
import {SplashScreenComponent} from "./splash-screen/splash-screen.component";
import {AppsListComponent} from "./apps-list/apps-list.component";

declare const System: any;

export function loadLoginModule() {
  return System
    .import('@eagle/lib-components')
    .then(function(module) {
      console.log('module', module);
      return module.ExampleFourModule;
    });
}

export const appRoutes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'apps-list',
    component: AppsListComponent
  },
  {
    path: 'four',
    loadChildren: loadLoginModule
  },
  {
    path: "**",
    redirectTo: "/",
  },
];


export const AppRouterModule = RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
);
