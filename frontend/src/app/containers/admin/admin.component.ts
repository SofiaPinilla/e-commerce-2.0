import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showModal: boolean = false;
  public message: string;
  public p;
  public messageUpdated: string;
  @Output()
  onClose = new EventEmitter();
  currentProduct: object;
  constructor(public productService: ProductService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAll()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  editProduct(productForm) { // comentar
    const product = productForm.value
    this.productService.editProduct(product, this.currentProduct['id'])
      .subscribe(res => {
        this.productService.setProduct(this.productService.product)
        this.productService.product = {
          product: ''
        }
        this.messageUpdated = 'product succesfully updated';
        setTimeout(() => this.messageUpdated = "", 2500);
        this.getAllProducts();
        err => console.error(err);
      })
    this.showModal = false;
  }
  selectItem(product) {
    this.showModal = true;
    this.currentProduct = product;
  }
  cancel() { this.showModal = false; }

  deleteProduct(productId) {
    this.productService.delete(productId)
      .subscribe(res => {
        this.message = 'product succesfully  deleted';
        setTimeout(() => this.message = "", 2500);
        this.getAllProducts();
      },
        error => {
          console.log(error);
        }
      )
  }
  search(event) {
    if (!event.target.value) {
      return this.getAllProducts();
    }
    this.productService.searchProduct(event.target.value)
      .subscribe(
        (res: HttpResponse<any>) => {
          this.productService.products = res
          console.log(res['length']);
        },

        (error: HttpErrorResponse) => console.error(error)
      );
  }
}
