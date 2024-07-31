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

  /**
   * Método ngOnInit se ejecuta una vez que el componente ha sido inicializado.
   * Este método suscribe a los parámetros de consulta de la ruta y obtiene
   * productos de un servicio, filtrándolos si hay una consulta de búsqueda.
   */
  ngOnInit(): void {
    // Suscribe a los parámetros de consulta de la ruta.
    this.route.queryParams.subscribe((params) => {
      // Almacena el parámetro 'q' de la URL en searchQuery, o una cadena vacía si 'q' no está presente.
      this.searchQuery = params['q'] || '';
    });

    // Llama al servicio de productos para obtener productos de la categoría 'face'.
    this.productService.getProducts('face').subscribe({
      // Función que se ejecuta cuando los datos son recibidos exitosamente.
      next: (data: any[]) => {
        // Si existe una consulta de búsqueda, filtra los productos por el tipo de piel.
        if (this.searchQuery && this.searchQuery.length > 0) {
          data = data.filter((product) => {
            // Devuelve solo los productos que coinciden con el tipo de piel de la consulta.
            return product.skinType === this.searchQuery;
          });
        }
        // Asigna los datos (productos) al atributo 'products' del componente.
        this.products = data;
      },
      // Función que se ejecuta si ocurre un error al obtener los productos.
      error: (error: any) => {
        // Muestra un mensaje de error en la consola.
        console.error('Error fetching face products', error);
      },
      // Función que se ejecuta una vez que la suscripción se ha completado.
      complete: () => {
        // Muestra un mensaje en la consola indicando que la obtención de productos ha finalizado.
        console.log('Product fetch completed');
      },
    });
  }
}
