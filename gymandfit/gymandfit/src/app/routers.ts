import { RouterModule, Router, Routes } from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
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

//shop
import { ProductListComponent } from './component/shop/product-list/product-list.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProductdetailComponent } from './component/shop/productdetail/productdetail.component';
import { ShoppingCartComponent } from './component/shop/shopping-cart/shopping-cart.component';

import { AdminComponent } from './component/admin/admin.component';

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


      { path : 'shop',
       component : ShopComponent,
       children : [

        {
          path : '', 
          redirectTo :'/shop/list',
          pathMatch : 'full',
        },
        { 
          path: 'list',
         component : ProductListComponent,
        },
        { 
          path: ':id',
         component : ProductdetailComponent,
        },
        
       ]
      },
        
      { 
        path: 'cart',
       component : ShoppingCartComponent,
      },
      

    
      { path : 'schedules',
       component : ScheduleComponent ,
       children :[
        { 
          path: '',
          redirectTo: '/schedules/list',
         pathMatch : 'full',
        },

        { 
          path: 'list',
         component : ListScheduleComponent,
        },
        { 
          path: ':id',
         component : ScheduleDetailComponent,
        },

       
         
      ],
     
      },
      { 
        path: 'admin',
       component : AdminComponent,
      },
    
    ]