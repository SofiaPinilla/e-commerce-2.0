import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  admins = ['admin'];
  constructor(public userService:UserService,public route:Router, public productService: ProductService,public cartService: CartService) { }

  ngOnInit(): void {
    const token: string = localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
      .subscribe((res => {
        this.userService.user = res
    }))
  }
  getAllProducts() {
    this.productService.getAll()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  logout(){
    this.userService.setUser(undefined);
    localStorage.removeItem('authToken');
    this.route.navigate([''])
  }
  search(event) {
    if (!event.target.value) {
      return this.getAllProducts();
    }
      this.productService.searchProduct(event.target.value)
      .subscribe(
        (res: HttpResponse<any>)  =>{
          this.productService.products = res
        } ,
        
        (error: HttpErrorResponse) => console.error(error)
        );
  }
  data(){
    return this.cartService.productsInCart.length
  }
}
