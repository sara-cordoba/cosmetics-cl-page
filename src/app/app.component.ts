import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { TranslatePlaceholderDirective } from './translate-placeholder.directive';
import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FooterComponent,
    TranslateModule,
    TranslatePlaceholderDirective,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'shoppingpage-angular';
  menuOption: string = '';
  iconSrc: string = 'assets/icons/icon-spain.png';
  searchQuery: string = '';
  products: any[] = [];
  productPrice = 0;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private router: Router,
    private cartService: CartService
  ) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
      this.iconSrc =
        lang === 'es'
          ? 'assets/icons/icon-spain.png'
          : 'assets/icons/icon-usa.png';
    });
  }

  ngOnInit(): void {
    this.cartService.products$.subscribe({
      next: (products: any) => {
        console.warn('hola');

        this.products = products;
        this.products.forEach((product) => {
          this.productPrice += product.price;
        });
      },
    });
  }

  navBar(menuOption: string) {
    this.menuOption = menuOption;
  }

  toggleLanguage() {
    const newLang = this.languageService.getLanguage() === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newLang);
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search-results'], {
        queryParams: { q: this.searchQuery },
      });
    }
  }
}
