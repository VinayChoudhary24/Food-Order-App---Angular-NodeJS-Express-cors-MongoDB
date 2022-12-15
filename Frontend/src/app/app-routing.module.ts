import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [

  // To Load the Home Component
  { path: '', component: HomeComponent },

  // To Load the Searched Item in the Search Bar
  { path: 'search/:searchTerm', component: HomeComponent },

  // To Load the Food Items By Tags
  { path: 'tag/:tag', component: HomeComponent },

  // To load the Specific Page when Click on any Food Item
  { path: 'food/:id', component: FoodPageComponent },

  // To Load the Cart Page
  { path: 'cart-page', component: CartPageComponent },

  // To Load the Login Page
  { path: 'login', component: LoginPageComponent },

  // To Load the Register Page
  { path: 'register', component: RegisterPageComponent },

  // To Load the Checkout Page
  { path: 'checkout', component: CheckoutPageComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
