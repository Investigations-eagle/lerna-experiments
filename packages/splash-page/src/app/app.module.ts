import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppsListComponent } from './apps-list/apps-list.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, AppsListComponent, SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
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
          path: 'login',
          loadChildren: './login/login.module#LoginModule'
        },
        {
          path: 'login-shared',
          loadChildren: './login-wrapper/login-wrapper.module#LoginWrapperModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
