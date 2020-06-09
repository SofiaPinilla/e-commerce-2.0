import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, public userService: UserService, public orderService: OrderService,public router:Router) { }

  ngOnInit(): void {
  }
  changeUnits (event,product){
    const units:number = +event.target.value;
    product.units=units;
  }
  mapCartProducts(products){
    return products.map(p => p)
    ?.reduce((acc, product) => {
      acc[product.id] = {units:product.units || 1};
       return acc
     }, {})
  }
  insertOrder(event: any) {
    const token = localStorage.getItem('authToken')
    const order = {
      products: this.mapCartProducts(this.cartService.productsInCart)
    }
    this.orderService.insert(token, order)
      .subscribe((res: HttpResponse<any>)  => 
        this.router.navigate(['buyEnd'])
          );
            setTimeout(() => {
              this.router.navigate([''])
            }, 10000);
        error => console.error(error);
    localStorage.removeItem('cart');
    this.cartService.productsInCart = [];
  }
  deleteProduct(productId, event) {
    event.target.parentNode.parentNode.remove()
    const productsFiltered = this.cartService.productsInCart.filter(p => p.id !== productId);
    localStorage.setItem('cart', JSON.stringify(productsFiltered));
    this.cartService.productsInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  }
}
