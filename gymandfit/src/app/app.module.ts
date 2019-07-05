//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'

import { AppRoutingModule} from './app-routing.module';
//service
import{ScheduleService} from './services/schedule.service'
import{ProductService} from './services/product.service'
// component
import { AppComponent } from './app.component';
import { LoginComponent } from './component/loginsignup/login/login.component';
import { SignupComponent } from './component/loginsignup/signup/signup.component';
import { ForgotpassComponent } from './component/loginsignup/forgotpass/forgotpass.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';

//schedule
import { ScheduleComponent } from './component/schedule/schedule.component';
import { ScheduleDetailComponent } from './component/schedule/schedule-detail/schedule-detail.component';
import { ListScheduleComponent } from './component/schedule/list-schedule/list-schedule.component';

import { ShopComponent } from './component/shop/shop.component';
import { ProductdetailComponent } from './component/shop/productdetail/productdetail.component';
import { ShoppingCartComponent } from './component/shop/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './component/shop/product-list/product-list.component';

//router
import { appRoutes } from './routers';
import { AdminComponent } from './component/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpassComponent,
    HomepageComponent,
    NavbarComponent,
   
    ScheduleComponent,
    ScheduleDetailComponent,
    ListScheduleComponent,

    ShopComponent,
    ProductdetailComponent,
   
    ShoppingCartComponent,
   
    ProductListComponent,
   
    AdminComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ScheduleService,ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
