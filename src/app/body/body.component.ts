import { ProductService } from './../product.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent implements OnInit {
  products: any[] = [];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.getProducts('body').subscribe({
      next: (data: any[]) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error('Error fetching body products', error);
      },
      complete: () => {
        console.log('Product fetch completed');
      },
    });
  }
}
