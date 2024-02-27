import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  categoryList :any;
  spicificCtgry:any;
  subCtgry:any;
  constructor(private _CategoriesService:CategoriesService){}

  ngOnInit():void{
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=>{console.log(response.data)
      this.categoryList = response.data}
    })
  }

  getSpecificCtgry(id:string){
    this._CategoriesService.getSpecificCategories(id).subscribe({
      next:(res)=>{console.log(res.data)
      this.spicificCtgry = res.data}
    })
  }

  getSubCategories(id:string){
    this._CategoriesService.getSubCtgry(id).subscribe({
      next:(res)=>{console.log(res.data)
      this.subCtgry = res.data},
      error:(err)=>{console.log(err)}
    })
  }



}
