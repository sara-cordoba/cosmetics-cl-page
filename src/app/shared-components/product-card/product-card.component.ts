import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addProduct(product);
    console.log(product);
  }
}
