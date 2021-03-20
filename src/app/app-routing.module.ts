import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ClientsInfoComponent } from './pages/clients-info/clients-info.component';
import { EmployeeAdmMenuComponent } from './pages/employee-adm-menu/employee-adm-menu.component';
import { FramePageComponent } from './pages/master/frame.page';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component'
import { PresentationComponentComponent } from './pages/presentation-component/presentation-component.component';
import { ServicesComponentComponent } from './pages/services-component/services-component.component';
import { AuthService } from './services/auth.services';
import { CartPageComponent } from './store/cart-page/cart-page.component';
import { GalleryPageComponent } from './store/gallery-page/gallery-page.component';
import { ProductsPageComponentComponent } from './store/products-page-component/products-page-component.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
     //Necessario estar logado 
    children: [
      { path: '', component: PresentationComponentComponent },
      { path: 'produtos', component: ProductsPageComponentComponent },  // A pagina inciial do app está apontando para a pagina de produtos, talvez precise ajustar depois
      {path: 'servicos', component: ServicesComponentComponent},
      { path: 'cart', component: CartPageComponent, canActivate: [AuthService] }
    ]

  },

  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'gallery', component: GalleryPageComponent },
    ]
  },

  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },

  {path: 'clients-info', component: ClientsInfoComponent,canActivate: [AuthService] }, // Página para acessar informações dos clientes
  {path:'func-adm', component: EmployeeAdmMenuComponent, canActivate: [AuthService] },   // Informações administrativas
  {path: 'pagamentos', component: PaymentPageComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
