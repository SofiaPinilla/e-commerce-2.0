import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public productService: ProductService, public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  getProducts() {
    this.productService.getAll()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  getByPriceAsc() {
    this.productService.getByPriceAsc()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  getByPriceDesc() {
    this.productService.getByPriceDesc()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  getCategoryByName(name:string) {
    this.categoryService.getCategoryByName(name)
      .subscribe(res => {
        this.productService.products = res[0].products
      })
  }
}
