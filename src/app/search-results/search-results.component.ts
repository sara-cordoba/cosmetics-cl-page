import { CommonModule } from '@angular/common';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
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
        this.searchResults = products.filter(
          (product) =>
            product.name.es
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            product.name.en
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
        );
      });
    }
  }
}
