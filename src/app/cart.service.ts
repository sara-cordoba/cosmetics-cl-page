import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: any[] = [];

  products$: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  addProduct(product: any) {
    // Buscar el producto en la lista
    const existingProduct = this.products.find((p) => p.id === product.id);
    if (existingProduct) {
      // Si el producto ya existe, aumentar el contador
      existingProduct.count += 1;
    } else {
      // Si el producto no existe, añadirlo con count inicializado a 1
      product.count = 1;
      this.products.push(product);
    }
    // Emitir la lista de productos actualizada
    this.products$.emit(this.products);
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.id !== productId);
    this.products$.emit(this.products);
  }
}
