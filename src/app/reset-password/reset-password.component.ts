import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {


  constructor(private _AuthService:AuthService, private _Router:Router){}
  msgError:string='';
  isLoading:boolean = false;
  
  resetForm:FormGroup = new FormGroup({
   
    email :new FormControl(null,[Validators.required,Validators.email]),
    newPassword :new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
   

  })
  resetSubmit(form:FormGroup){
    console.log(form.value);
    console.log(this.resetForm.value);
    if(this.resetForm.valid){
      this.isLoading=true;
      this._AuthService.resetPassword(this.resetForm.value).subscribe({
        next:(response)=>{
          this.isLoading= false;
          // localStorage.setItem('eToken',response.token);
          // this._AuthService.saveUserData()
          this._Router.navigate(['./signin'])

        },
        error:(err)=>{
          this.isLoading= false
          this.msgError=err.error.message}
       
  
        
      })

    }
  
  
  }
}
