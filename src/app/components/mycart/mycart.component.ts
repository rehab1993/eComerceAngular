import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit{
  cartItems:any
  totalPrice:any
  constructor(private _CartService:CartService){}

  ngOnInit():void{
    this.showCart()
  }

  showCart(){
    this._CartService.showMyCart().subscribe({
      next:(response)=>{console.log(response)
      this.cartItems = response.data;
      console.log( this.cartItems)
      this.totalPrice = response.data.
      totalCartPrice;
      
    console.log(this.totalPrice)
    console.log(this.cartItems);}, 
    error:(err)=>{console.log(err)}

    })
  }


  updateMyCart(count:number,id:string){
    if(count==0){
      this.deleteMyCart(id)
    }
    this._CartService.updateCart(count,id).subscribe({
      next:(response)=>{console.log(response)
        // this.showCart()
        this.cartItems = response.data
       
      }

    })
  }


  deleteMyCart(id:string){
    this._CartService.deleteCart(id).subscribe({
      next:(response)=>{console.log(response)
        this.showCart();
      this._CartService.cartNumbers.next(response.numOfCartItems)}

    })


  }

 deletAllItemsFromCart(){
  this._CartService.deleteAllCart().subscribe({
    next:(res)=>{console.log(res)
    // this.showCart()
    this._CartService.cartNumbers.next(res.numOfCartItems)}
  })
 } 

}
