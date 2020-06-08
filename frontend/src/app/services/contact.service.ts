import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( public httpClient: HttpClient) { }
  contact(formulario:object):Observable<any>{
    return this.httpClient.post('http://localhost:8000/api/contact-us',formulario);
  }
}
