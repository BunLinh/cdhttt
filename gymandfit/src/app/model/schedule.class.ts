export class Schedule{
  public  id : number;
  public name : string;
  public  price : number;
  public  starday : string;
  public img: string;
    
constructor( name: string, price: number, starday: string, img: string){
  this.name=name;
  this.price=price;
  this.starday=starday;
  this.img=img;
}
}
  