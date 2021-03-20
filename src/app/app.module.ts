import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { EmployeeAdmMenuComponent } from './pages/employee-adm-menu/employee-adm-menu.component';
import { ProductsPageComponentComponent } from './store/products-page-component/products-page-component.component';
import { GalleryPageComponent } from './store/gallery-page/gallery-page.component';
import { CartPageComponent } from './store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ClientsInfoComponent } from './pages/clients-info/clients-info.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import {HttpClientModule} from  '@angular/common/http';
import { ServicesComponentComponent } from './pages/services-component/services-component.component';
import { CardComponent } from './components/store/product/card/card.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DataService } from './services/data.services';
import { AuthService } from './services/auth.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PresentationComponentComponent } from './pages/presentation-component/presentation-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    EmployeeAdmMenuComponent,
    ClientsInfoComponent,
    FramePageComponent,
    EmployeeAdmMenuComponent,
    ProductsPageComponentComponent,
    GalleryPageComponent,
    CartPageComponent,
    PaymentPageComponent,
    CardComponent,
    PresentationComponentComponent,
    ServicesComponentComponent,
    CardComponent,
    LoadingComponent,
    PresentationComponentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
