import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-face',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, TranslateModule],
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.scss'],
})
export class FaceComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts('facial').subscribe({
      next: (data: any[]) => {
        this.products = data;
      },
      error: (error: any) => {
        console.error('Error fetching facial products', error);
      },
      complete: () => {
        console.log('Product fetch completed');
      },
    });
  }
}
