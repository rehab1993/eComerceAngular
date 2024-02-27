
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { SingleProduct } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  productDetails:any|SingleProduct =''
  constructor(private _ProductsService:ProductsService,private _ActivatedRoute:ActivatedRoute,private _CartService:CartService,private toastr: ToastrService){}
  ngOnInit(): void {
  let x =  this._ActivatedRoute.snapshot.params['productId']
    this._ProductsService.getProductDetails(x).subscribe((response)=>{
      this.productDetails=response.data
      console.log(response.data)
    })
    
  }

  addToMyCart(pId:string){
    this._CartService.addToChart(pId).subscribe({
      next:(response)=>{console.log(response)
      this.toastr.success(response.message)},
      error:(err)=>{console.log(err)},
    })
   }
  
  

}
