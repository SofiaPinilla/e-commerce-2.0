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
import { AdminComponent } from './containers/admin/admin.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ContactComponent } from './containers/contact/contact.component';
import { AboutComponent } from './containers/about/about.component';
import { AddProductComponent } from './containers/admin/add-product/add-product.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'product/:id',component: ProductComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent, canActivate:[AuthGuard]},
  {path:'myorders', component: OrdersComponent, canActivate:[AuthGuard]},
  {path:'wishlist', component: WishListComponent, canActivate:[AuthGuard]},
  {path:'admin', component: AdminComponent, canActivate:[AdminGuard]},
  {path: 'search/:search', component: SearchComponent, canActivate:[AuthGuard]},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'addProduct', component: AddProductComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
