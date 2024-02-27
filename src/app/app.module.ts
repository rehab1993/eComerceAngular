import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WishlistsComponent } from './wishlists/wishlists.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrandsComponent } from './components/brands/brands.component';

import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { MycartComponent } from './components/mycart/mycart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { SearchPipe } from './search.pipe';
import { ProductsComponent } from './components/products/products.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    BrandsComponent,
    NavBlankComponent,
    NavAuthComponent,
    LogoutComponent,
    NotfoundComponent,
    CategoryComponent,
    AuthLayoutComponent,
    FooterComponent,
    WishlistsComponent,
    SliderComponent,
    ProductDetailsComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    MycartComponent,
    PaymentComponent,
    AllordersComponent,
    SearchPipe,
    ProductsComponent,
    MainSliderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule ,
   FormsModule,
  
    ToastrModule.forRoot()
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
