import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
    .subscribe(res => {
      this.productService.products = res})
  }

}
