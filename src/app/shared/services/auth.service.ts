import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) {}
  userName = new BehaviorSubject('');
  // userId = new BehaviorSubject('');
  // userId:any

  signOut(){
    localStorage.removeItem('eToken');
    this._Router.navigate(['/signin'])
  }

  saveUserData():void{
    if(localStorage.getItem('eToken') != null){
      let encodeTooken:any = localStorage.getItem('eToken');
      let decodeToken:any =   jwtDecode(encodeTooken);
      console.log(decodeToken)
      this.userName.next(decodeToken.name);
      // this.userId.next(decodeToken.id);
     
      console.log(this.userName);
      // console.log(this.userId);
     
    
    }

  }
  setRegister(userData:object):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
  }
  setLogin(userData:object):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
  }

  forgetPassword(userData:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,userData)

  }
  verifyCode(userData:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,userData)

  }
  resetPassword(userData:any):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,userData)

  }
}
