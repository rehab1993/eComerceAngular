import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  msgSuccess:any;
  msgSu:any;
  constructor(private _AuthService:AuthService,private _Router:Router){}

  forgetPassword = new FormGroup({
    email :new FormControl

  })
sendCode(form:FormGroup):void{
  this._AuthService.forgetPassword(form.value).subscribe({
    next:(response)=>{console.log(response)
      this.msgSuccess = response.message;
      document.querySelector('.forgetPassword')?.classList.add('d-none');
      document.querySelector('.verifyCode')?.classList.remove('d-none');
    },
    error:(err)=>{console.log(err)},
  })
 

}



verify = new FormGroup({
  resetCode :new FormControl

})

verifyCode(form:FormGroup){
  this._AuthService.verifyCode(form.value).subscribe({
    next:(response)=>{console.log(response)
    this.msgSu = response.message;
  if(response.status=='Success'){
    this._Router.navigate(['/resetPassword'])
  }}
  })

}
}
