import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  allBrands:any;
  specificBrand:any
  constructor(private _BrandsService:BrandsService){}
  ngOnInit():void{
    this._BrandsService.getAllBrands().subscribe({
      next:(response)=>{console.log(response.data)
      this.allBrands = response.data}
    })
  }
 getSpecificBrand(bId:string){
  this._BrandsService.getSpecificBrand(bId).subscribe({
next:(res)=>{console.log(res.data)
this.specificBrand = res.data}})
  
 

}
}
