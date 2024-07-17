import { ProductService } from './../product.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hair',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, TranslateModule],
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.scss',
})
export class HairComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts('hair').subscribe({
      next: (data: any[]) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error('Error fetching hair products', error);
      },
      complete: () => {
        console.log('Product fetch completed');
      },
    });

    this.translate.onLangChange.subscribe(() => {
      this.updateProductTranslations();
    });
  }

  private updateProductTranslations() {
    const lang = this.translate.currentLang || this.translate.getDefaultLang();
    this.products = this.products.map((product) => ({
      ...product,
      name: product.name[lang],
      description: product.description[lang],
    }));
  }
}
