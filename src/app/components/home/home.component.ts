import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category, Products } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';
import { CartService } from 'src/app/shared/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  productsContainer:Products[]=[];
  allCategories:Category[]=[];
  searchVlue:string='';
  heartIsClicked:boolean = false;
  x:any;
  wishListItems:any;


 

  constructor(private _ProductsService:ProductsService,private _CartService:CartService,private toastr: ToastrService,private _WishlistService:WishlistService){}
 ngOnInit(){
  this._ProductsService.getProducts().subscribe((response)=>{
    console.log(response.data);

    this.productsContainer = response.data


    this._ProductsService.getCategories().subscribe({
      next : (results)=>{
        this.allCategories = results.data
        console.log(results.data)}
     
    })
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
console.log(this.x)
  if(this.x.length==0){

  this._WishlistService.addProductToWishlist(id).subscribe((data:any)=>{
    this.wishListItems=data.data;
    console.log(this.wishListItems);
    this.toastr.success(data.message); 
    // document.getElementById('heart-icon')?.classList.add('text-danger')
  })
 

 }

  else {
    this.toastr.success('product alredy exist in wishlist :)')
    this._WishlistService.deleteProductFromWishlist(id).subscribe((data)=>{console.log(data)});
  this._WishlistService.displayWishlist()}

}

deleteFromWishlist(id:string){
  this._WishlistService.deleteProductFromWishlist(id).subscribe((data)=>{
    console.log(data)
  })
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
