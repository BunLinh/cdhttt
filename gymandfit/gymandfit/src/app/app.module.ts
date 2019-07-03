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
import { HomepageComponent } from './component/homepage/homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProductdetailComponent } from './component/shop/productdetail/productdetail.component';
import { ShoppingCartComponent } from './component/shop/shopping-cart/shopping-cart.component';
import { appRoutes } from './routers';
  import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    HomepageComponent,
    NavbarComponent,
   
    ScheduleComponent,
    ShopComponent,
    ProductdetailComponent,
   
    ShoppingCartComponent
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
