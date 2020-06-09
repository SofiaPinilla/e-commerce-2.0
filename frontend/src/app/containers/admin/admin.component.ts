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
  imgSrc:string |ArrayBuffer;
  @Output()
  onClose = new EventEmitter();
  currentProduct: object;
  constructor(public productService: ProductService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAll()
      .subscribe((res: HttpResponse<any>)  => {
        this.productService.products = res
      },(error: HttpErrorResponse) => console.error(error))
  }
  readURL(event: any): void {
    if (event.target?.files[0]) {
        const file = event.target.files[0]; 

        const reader = new FileReader();
        reader.onload = e => this.imgSrc = reader.result;

        reader.readAsDataURL(file);
    }
}
  editProduct(productForm) { // comentar
    const product = productForm.value
    this.productService.editProduct(product, this.currentProduct['id'])
      .subscribe((res: HttpResponse<any>)  => {
        this.productService.setProduct(this.productService.product)
        this.productService.product = {
          product: ''
        }
        this.messageUpdated = 'product succesfully updated';
        setTimeout(() => this.messageUpdated = "", 2500);
        this.getAllProducts();
        err => console.error(err);
      },(error: HttpErrorResponse) => console.error(error))
    this.showModal = false;
  }
  editProductPhoto(imageInput,productId) {
    const productPhotoFormData = new FormData();
    if (imageInput.files[0]) productPhotoFormData.set('img', imageInput.files[0]);
    this.productService.editProductPhoto(productPhotoFormData,productId)
      .subscribe((res: HttpResponse<any>)  => {
        this.productService.setProduct(this.productService.product)
        this.messageUpdated = 'product succesfully updated';
        setTimeout(() => this.messageUpdated = "", 2500);
        this.getAllProducts();
        err => console.error(err);
      },(error: HttpErrorResponse) => console.error(error))
    this.showModal = false;
  }
  selectItem(product) {
    this.showModal = true;
    this.currentProduct = product;
  }
  cancel() { this.showModal = false; }

  deleteProduct(productId) {
    this.productService.delete(productId)
      .subscribe((res: HttpResponse<any>)  => {
        this.message = 'product succesfully  deleted';
        setTimeout(() => this.message = "", 2500);
        this.getAllProducts();
      },(error: HttpErrorResponse) => console.error(error)
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
