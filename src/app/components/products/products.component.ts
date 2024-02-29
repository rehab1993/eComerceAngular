import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';
import { CartService } from 'src/app/shared/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
productList :Products[]=[];
x:any;
  constructor(private _ProductsService:ProductsService,private _CartService:CartService,private toastr: ToastrService,private _WishlistService:WishlistService){}
ngOnInit():void{
  this._ProductsService.getProducts().subscribe({
    next:(response)=>{console.log(response.data)
    this.productList = response.data}
  })
}

addToMyCart(pId:string){
  this._CartService.addToChart(pId).subscribe({
    next:(response)=>{console.log(response)
      this._CartService.cartNumbers.next(response.numOfCartItems)
      this.toastr.success(response.message);  },
    error:(err)=>{console.log(err)},
  })
 }

 addToWishlist(id:string){
  this.x=  this._WishlistService.wishLIST.filter((product:any)=>{ return product.id==id})
  if(this.x.length==0){
  this._WishlistService.addProductToWishlist(id).subscribe({
    next:(response)=>{console.log(response)
      this.toastr.success(response.message); }
  })}else{
    this.toastr.success('product alredy exist in wishlist :)')
    this._WishlistService.deleteProductFromWishlist(id).subscribe((data)=>{console.log(data)});
  this._WishlistService.displayWishlist()

  }
}


changeHeart(eventInfo:any){
  console.log(eventInfo.target)
  let heart = eventInfo.target;
  heart?.classList.add('text-danger')
}

isInWishlist(id:string):boolean{
  return  this._WishlistService.wishLIST?.filter((product:any)=>{ return product.id==id}).length==0
}
}
