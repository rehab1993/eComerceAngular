import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../shared/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlists',
  templateUrl: './wishlists.component.html',
  styleUrls: ['./wishlists.component.scss']
})
export class WishlistsComponent implements OnInit{
  wishList:any
  constructor(private _WishlistService:WishlistService,private _CartService:CartService ,private toastr: ToastrService){}


ngOnInit():void{
 this.displayWishlist()

}
  
displayWishlist(){
  this._WishlistService.displayWishlist().subscribe({
    next:(res)=>{console.log(res.data)
    this.wishList = res.data},
    error:(err)=>{console.log(err)}
  })

}

addToMyCart(pId:string){
  this._CartService.addToChart(pId).subscribe({
    next:(response)=>{console.log(response)
      this._CartService.cartNumbers.next(response.numOfCartItems)
      this.toastr.success(response.message);
    this.deleteFromWishlist(pId)  },
    error:(err)=>{console.log(err)},
  })
 }

 deleteFromWishlist(id:string){
this._WishlistService.deleteProductFromWishlist(id).subscribe({
  next:(res)=>{console.log(res)
  this.displayWishlist()}})

 }


}
