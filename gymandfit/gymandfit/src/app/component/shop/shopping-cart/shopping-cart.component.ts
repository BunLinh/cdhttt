import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Product} from '../../../model/product.class'
import{ProductService} from '../../../services/product.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css','../../../../assets/css/animate.css',
  '../../../../assets/css/owl.carousel.min.css',
  '../../../../assets/css/magnific-popup.css',
  '../../../../assets/css/bootstrap.css',
  '../../../../assets/css/icomoon.css',]
})
export class ShoppingCartComponent implements OnInit {
  public products: Product[]=[];
  public name: string;
  public price : number;
  public img : string;

  public queryParamsSubscription : Subscription;

  constructor(
    public productService : ProductService,
    public routerService : Router,
    public activateRouter : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryParamsSubscription=
     this.activateRouter.queryParams.subscribe(data =>
      { let name = data['name'];
        let price = data['price'];
        let img= data['img'];
        this.products = this.productService.getAllProduct();




      })
  }
ngOnDestroy(){
  if(this.queryParamsSubscription){
    this.queryParamsSubscription.unsubscribe();
  }

}
}
