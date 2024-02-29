import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './auth.guard';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishlistsComponent } from './wishlists/wishlists.component';


const routes: Routes = [
 
 { path:'',canActivate:[authGuard],component:BlankLayoutComponent,children:[
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',redirectTo:'sigin',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'brands',component:BrandsComponent},
  {path:'mycart',component:MycartComponent},
  {path:'category',component:CategoryComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:productId',component:ProductDetailsComponent},
  {path:'wishlist',component:WishlistsComponent},
  {path:'checkout',component:PaymentComponent},
  {path:'allorders',component:AllordersComponent},
 ]},
 { path:'',component:AuthLayoutComponent,children:[
  
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
 ]},
 {
  path:'**',component:NotfoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
