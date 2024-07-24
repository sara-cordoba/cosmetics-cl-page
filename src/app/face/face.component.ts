import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductCardComponent } from '../shared-components/product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-face',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, TranslateModule, ProductCardComponent],
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.scss'],
})
export class FaceComponent implements OnInit {
  products: any[] = [];
  searchQuery: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getProducts('face').subscribe({
      next: (data: any[]) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error('Error fetching face products', error);
      },
      complete: () => {
        console.log('Product fetch completed');
      },
    });

    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'] || '';
      this.filterBySkinType();
    });
  }

  filterBySkinType() {}
}
