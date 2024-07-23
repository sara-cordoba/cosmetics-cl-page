import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: any[] = [];

  products$: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  addProduct(product: any) {
    this.products.push(product);
    this.products$.emit(this.products);
  }
}
