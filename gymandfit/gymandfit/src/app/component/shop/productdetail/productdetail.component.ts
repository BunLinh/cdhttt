import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Product} from '../../../model/product.class'
import{ProductService} from '../../../services/product.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css','../../../../assets/css/animate.css',
  '../../../../assets/css/owl.carousel.min.css',
  '../../../../assets/css/magnific-popup.css',
  '../../../../assets/css/bootstrap.css',]
})
export class ProductdetailComponent implements OnInit, OnDestroy {

  public product : Product = null;
  public subscription: Subscription;
  constructor(
    public productService : ProductService,
     //lay navigate
     public routerService : Router,
     //lay param
     public activateRoute : ActivatedRoute,
  ) { 
    
  }

  ngOnInit() {
    this.handleParams();
  }
  handleParams(){
    this.subscription= this.activateRoute.params.subscribe(data=>{
      let id= data.id;
      this.product= this.productService.getProductById(id); 
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
