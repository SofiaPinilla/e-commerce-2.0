import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/user/login/login.component';
import { RegisterComponent } from './containers/user/register/register.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { ProductComponent } from './containers/product/product.component';
import { ProductsComponent } from './containers/products/products.component';
import { SearchComponent } from './containers/search/search.component';
import { CartComponent } from './containers/cart/cart.component';
import { OrdersComponent } from './containers/profile/orders/orders.component';
import { WishListComponent } from './containers/profile/wish-list/wish-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path:'product/:id',component: ProductComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'myorders', component: OrdersComponent},
  {path:'wishlist', component: WishListComponent},
  {path: 'search/:search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
