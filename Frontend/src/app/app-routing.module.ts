import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
