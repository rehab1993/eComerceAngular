import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{
  cartNumber!:number
  constructor(private _AuthService:AuthService, private _CartService:CartService){}
  userName:any
  logOut():void{

    this._AuthService.signOut();
   
  
  }
  ngOnInit():void{
    // console.log(this._AuthService.userData.name)
    // this._AuthService.userData.name = this.userName
    this._AuthService.userName.subscribe({
      next:(val)=>{
        this.userName = val
      }
    })

    this._CartService.cartNumbers.subscribe({
      next:(response)=>{console.log(response)
      this.cartNumber=response}
    })

  }


}
