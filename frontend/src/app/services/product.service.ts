import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products;
  public product;
  constructor(public httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/products');
  }
  getProductId(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8000/api/products/id/${id}`);
  }
}
