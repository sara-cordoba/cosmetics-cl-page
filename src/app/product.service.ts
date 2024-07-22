import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl =
    'https://my-json-server.typicode.com/sara-cordoba/cosmetics-cl-page';

  constructor(private http: HttpClient, private translate: TranslateService) {}

  getProducts(category: string): Observable<any[]> {
    const lang = this.translate.currentLang || this.translate.getDefaultLang();
    return this.http.get<any[]>(`${this.apiUrl}/${category}`).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          name: product.name[lang],
          description: product.description[lang],
          price: product.price[lang],
        }))
      )
    );
  }

  getAllProducts(): Observable<any[]> {
    const lang = this.translate.currentLang || this.translate.defaultLang;

    // Realiza las solicitudes a cada categoría
    const face$ = this.http.get<any[]>(`${this.apiUrl}/face`).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          name: product.name[lang],
          description: product.description[lang],
          price: product.price[lang],
        }))
      )
    );
    const hair$ = this.http.get<any[]>(`${this.apiUrl}/hair`).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          name: product.name[lang],
          description: product.description[lang],
          price: product.price[lang],
        }))
      )
    );
    const body$ = this.http.get<any[]>(`${this.apiUrl}/body`).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          name: product.name[lang],
          description: product.description[lang],
          price: product.price[lang],
        }))
      )
    );
    const bathroom$ = this.http.get<any[]>(`${this.apiUrl}/bathroom`).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          name: product.name[lang],
          description: product.description[lang],
          price: product.price[lang],
        }))
      )
    );

    // Combina los resultados de todas las solicitudes
    return forkJoin([face$, hair$, body$, bathroom$]).pipe(
      map((results) => {
        const allProducts = [
          ...results[0],
          ...results[1],
          ...results[2],
          ...results[3],
        ];
        return allProducts;
      })
    );
  }
}
