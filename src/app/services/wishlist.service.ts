import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  headers:any={token:localStorage.getItem('eToken')};
  productId:string=''
  wishlistNumber:any;
  wishLIST :any;
  hertColor = new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient) { 
    this.displayWishlist().subscribe({
    next:(res)=>{console.log(res)
    this.wishLIST=res.data;
 
}  
    })
  }

  addProductToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:id},{headers:this.headers})

  }
  displayWishlist():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:this.headers})

  }
  deleteProductFromWishlist(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers:this.headers})

  }


}
