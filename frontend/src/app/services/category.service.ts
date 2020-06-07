import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
public categories
  constructor(public httpClient: HttpClient) { }
  getCategoryByName(name: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8000/api/categories/name/${name}`);
  }
}
