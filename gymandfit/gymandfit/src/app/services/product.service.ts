import { Injectable } from '@angular/core';
import {Product} from '../model/product.class'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products : Product []=[
    {id : 1, name: 'Quan bagy', price :200000, img:'assets/img/img/sp1.jpg' } ,
    {id : 2, name: 'Ao cogri', price :100000, img:'assets/img/img/sp2.jpg' } ,
    {id : 3, name: 'Baby s', price :150000, img:'assets/img/img/sp3.jpg' } ,
    {id : 4, name: 'Gym master', price :50000, img:'assets/img/img/sp4.jpg' } ,
    {id : 5, name: 'Yoga', price :400000, img:'assets/img/img/sp5.jpg' } ,
    {id : 6, name: 'Scai', price :500000, img:'assets/img/img/sp6.jpg' } ,
 
     ]
  constructor() { 
   



  }
  getAllProduct(){
    return this.products;
  }
  getProductById(id:number){
    let result= null;
    for(var i=0; i<this.products.length;i++){
      if(this.products[i].id==id){
        return result= this.products[i];
        break;
      }}
      return result;
    
  }
}
