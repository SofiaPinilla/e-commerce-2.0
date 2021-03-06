import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/user/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import {NgxPaginationModule} from 'ngx-pagination';
import { AddProductComponent } from './containers/admin/add-product/add-product.component';
import { BuyEndComponent } from './containers/buy-end/buy-end.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProductComponent,
    ProductsComponent,
    SearchComponent,
    CartComponent,
    OrdersComponent,
    WishListComponent,
    AdminComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent,
    AddProductComponent,
    BuyEndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
