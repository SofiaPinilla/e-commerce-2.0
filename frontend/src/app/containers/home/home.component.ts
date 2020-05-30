import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public products;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
           .subscribe(res => {
             this.productService.products = res})
  }

}
