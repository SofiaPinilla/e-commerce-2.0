import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
    public productsInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];


}
