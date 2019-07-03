import { RouterModule, Router, Routes } from '@angular/router';
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


export const appRoutes: Routes = [
    {
      path : '',
      component:  HomepageComponent,
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
      path : 'homepage',
      component : HomepageComponent,
        },
       { path : 'schedule',
      component : ScheduleComponent,
        },
        { path : 'shop', component : ShopComponent,
        children: [{ path: 'detail', component:ProductdetailComponent }]
          },
  ]