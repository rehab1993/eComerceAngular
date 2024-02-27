import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {


  constructor(private _HttpClient:HttpClient,private _AuthService:AuthService) { }




 getAllOrders(uId:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${uId}`)
 } 
}
