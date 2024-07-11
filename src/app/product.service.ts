import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl =
    'https://my-json-server.typicode.com/sara-cordoba/cosmetics-cl-page';

  constructor(private http: HttpClient) {}

  getProducts(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${category}`);
  }
}
