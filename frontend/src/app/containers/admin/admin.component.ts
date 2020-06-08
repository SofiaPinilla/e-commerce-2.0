import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showModal: boolean = false;
  @Output()
  onClose = new EventEmitter();
  currentProduct: object;
  constructor(public productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  postProduct(productForm, imageInput) { // comentar
    const productFormData = new FormData();
    if (productForm.value.name) productFormData.set('name', productForm.value.name);
    if (productForm.value.price) productFormData.set('price', productForm.value.price);
    if (productForm.value.description) productFormData.set('description', productForm.value.description);
    if (productForm.value.category_id) productFormData.set('category_id', productForm.value.category_id);
    if (imageInput.files[0]) productFormData.set('img', imageInput.files[0]);

    this.productService.postProduct(productFormData)
      .subscribe((res: HttpResponse<any>) => {
        imageInput.value = '';
        this.productService.setProduct(this.productService.product)
        imageInput.value = '';
        this.productService.product = {
          product: ''
        }
        this.productService.getAll()
          .subscribe(res => {
            this.productService.products = res
          })

        err => console.error(err);
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
        this.productService.getAll()
          .subscribe(res => {
            this.productService.products = res
          })
        err => console.error(err);
      })
  }
  selectItem(product) {
    this.showModal = true;
    this.currentProduct = product;
  }
  cancel() { this.onClose.emit(null); }


}
