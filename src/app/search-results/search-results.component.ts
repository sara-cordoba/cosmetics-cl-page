import { CommonModule } from '@angular/common';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProductCardComponent } from '../shared-components/product-card/product-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProductCardComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'] || '';
      this.searchProducts();
    });
  }

  searchProducts(): void {
    if (this.searchQuery.trim()) {
      this.productService.getAllProducts().subscribe((products) => {
        console.log(products);
        this.searchResults = products.filter((product) => {
          const name = product?.name ?? '';
          const description = product?.description ?? '';

          return (
            name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            description.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        });
        console.log(this.searchResults);
      });
    }
  }
}
