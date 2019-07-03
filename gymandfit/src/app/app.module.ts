//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'

import { AppRoutingModule} from './app-routing.module';
// component
import { AppComponent } from './app.component';
import { LoginComponent } from './component/loginsignup/login/login.component';
import { SignupComponent } from './component/loginsignup/signup/signup.component';
import { ForgotpassComponent } from './component/loginsignup/forgotpass/forgotpass.component';
import { HomePageComponent } from './component/home-page/home-page.component';


const appRoutes: Routes = [
  {
    path : '',
    component:  HomePageComponent,
  },
  
  {
    path : 'login',
    component : LoginComponent,

  },
  {
path : 'signup',
component : SignupComponent,
  },
  {
    path : 'forgot',
    component : ForgotpassComponent,
      },
  {
    path : '/homepage',
    component : HomePageComponent,
          },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
