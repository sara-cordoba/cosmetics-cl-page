import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
        }))
      )
    );
  }
}
