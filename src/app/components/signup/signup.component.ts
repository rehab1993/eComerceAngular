import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnDestroy{
  constructor(private _AuthService:AuthService, private _Router:Router){}
  msgError:string='';
  isLoading:boolean = false;
  registerSubscribe!:Subscription
  registerForm:FormGroup = new FormGroup({
    name :new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email :new FormControl(null,[Validators.required,Validators.email]),
    password :new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword :new FormControl(null),
    phone :new FormControl(null,[Validators.required,Validators.pattern(/(01)[0125][0-9]{8}$/)]),

  },{validators:[this.confirmPassword]} as FormControlOptions)

  confirmPassword(group:FormGroup):void{
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if(rePassword?.value == ''){
      rePassword.setErrors({require:true})
    }else if(rePassword?.value !== password?.value){
      rePassword?.setErrors({missmatch:true})

    }
  }
  registerSubmit(form:FormGroup){
    console.log(form.value);
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.isLoading=true;
  this.registerSubscribe =    this._AuthService.setRegister(this.registerForm.value).subscribe({
        next:(response)=>{if(response.message =='success'){
          this.isLoading= false
          this._Router.navigate(['./signin'])

        }},
        error:(err)=>{
          this.isLoading= false
          this.msgError=err.error.message}
       
  
        
      })

    }
  
  
  }


  ngOnDestroy(): void {
    this.registerSubscribe?.unsubscribe()
    
  }

}
