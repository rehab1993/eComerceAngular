import { Component, OnInit } from '@angular/core';
import { AllOrdersService } from 'src/app/services/all-orders.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{
allOrders:any;
userId:any;
innerOrders:any;
ordersList:any

  constructor(private _AllOrdersService:AllOrdersService,private _AuthService:AuthService){}

  
  ngOnInit(){
   this. getId()
 
    this.getUserOrders(this.userId)
  }

  getId():void{
    if(localStorage.getItem('eToken') != null){
      let encodeTooken:any = localStorage.getItem('eToken');
      let decodeToken:any =   jwtDecode(encodeTooken);
      console.log(decodeToken);
      this.userId = decodeToken.id;
      console.log(this.userId)
     
   
    }

  }

  // getUserOrders(uId:string){
  //   this._AllOrdersService.getAllOrders(uId).subscribe({
  //     next:(res)=>{console.log(res)
  //       for(var i = 0; i < res.length ;i++){
  //         console.log(res[i].cartItems)
            
  //           this.ordersList = res[i]
  //           console.log(res[i])
  //           this.innerOrders = res[i].cartItems
        
  //       }
      
        
        
  //       },
       
  //     error:(err)=>{console.log(err)}
  //   })
  // }

  getUserOrders(uId:string){
    this._AllOrdersService.getAllOrders(uId).subscribe({
      next:(res)=>{console.log(res)
        for(var i = 0; i < res.length ;i++){
          // console.log(res[i].cartItems)
            
            this.ordersList = res
            console.log(res)
          //   this.innerOrders = res[i].cartItems
          
        
        }
     
        
        
        },
       
      error:(err)=>{console.log(err)}
    })
  }
}
