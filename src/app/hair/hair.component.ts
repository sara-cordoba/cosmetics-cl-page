import { ProductService } from './../product.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hair',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.scss',
})
export class HairComponent implements OnInit {
  products: any[] = [];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.getProducts('hair').subscribe({
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
  }
}
