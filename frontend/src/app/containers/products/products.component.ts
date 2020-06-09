import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public productService: ProductService, public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts() {
    this.productService.getAll()
      .subscribe((res: HttpResponse<any>)  => {
        this.productService.products = res
      },(error: HttpErrorResponse) => console.error(error))
  }
  getProducts() {
    this.getAllProducts()
  }
  getByPriceAsc() {
    this.productService.getByPriceAsc()
      .subscribe((res: HttpResponse<any>)  => {
        this.productService.products = res
       
      } ,(error: HttpErrorResponse) => console.error(error))
  }
  getByPriceDesc() {
    this.productService.getByPriceDesc()
      .subscribe((res: HttpResponse<any>)  => {
        this.productService.products = res
      },(error: HttpErrorResponse) => console.error(error))
  }
  getCategoryByName(name:string) {
    this.categoryService.getCategoryByName(name)
      .subscribe((res: HttpResponse<any>)  => {
        this.productService.products = res[0].products
      },(error: HttpErrorResponse) => console.error(error))
  }
}
