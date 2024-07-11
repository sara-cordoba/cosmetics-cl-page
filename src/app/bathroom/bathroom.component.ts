import { ProductService } from './../product.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bathroom',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './bathroom.component.html',
  styleUrl: './bathroom.component.scss',
})
export class BathroomComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts('bathroom').subscribe({
      next: (data: any[]) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error('Error fetching bathroom products', error);
      },
      complete: () => {
        console.log('Product fetch completed');
      },
    });
  }
}
