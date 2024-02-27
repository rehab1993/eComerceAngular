import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  headers:any={token:localStorage.getItem('eToken')}
cartNumbers = new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient) {
   this.showMyCart().subscribe({
    next:(response)=>{console.log('res',response)
  this.cartNumbers.next(response.numOfCartItems)
}
   })
   }
  addToChart(id:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:id},{headers:this.headers})
  }

  showMyCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:this.headers})
  }
  updateCart(count:number,id:string):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count},{headers:this.headers})
  }
  deleteCart(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers:this.headers})
  }

  checkout(id:string,formDta:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`
    ,{shippingAddress:formDta},{headers:this.headers})
  }

  deleteAllCart():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:this.headers})
  }



}
