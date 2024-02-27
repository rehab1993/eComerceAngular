import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  cartId:string=''
  constructor(private _CartService:CartService){}

  checkout = new FormGroup({
    details :new FormControl(null,[Validators.required]),
    phone :new FormControl(null,[Validators.required,Validators.pattern(/(01)[0125][0-9]{8}$/)]),
    city :new FormControl(null,[Validators.required]),
  })

  ngOnInit():void{
   this.showCart()
  }

  showCart(){
    this._CartService.showMyCart().subscribe({
      next:(response)=>{console.log(response)
        this.cartId = response.data._id
        console.log(this.cartId)
        // console.log(response.session.url)
    //   this.cartItems = response.data.products;
    //   this.totalPrice = response.data.
    //   totalCartPrice
    //   ;
    //   console.log(this.totalPrice)
    // console.log(this.cartItems);
  },
  error:(err)=>{console.log(err)}
    })
  }


 payment(form:FormGroup){
  console.log(form.value);
  this._CartService.checkout(this.cartId,form.value).subscribe({
    next:(response)=>{console.log(response)
    window.location= response.session.url

    
    }
  })
 }
 
}
