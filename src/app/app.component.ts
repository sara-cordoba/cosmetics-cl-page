import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { TranslatePlaceholderDirective } from './translate-placeholder.directive';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shoppingpage-angular';
  menuOption: string = '';
  iconSrc: string = 'assets/icons/icon-spain.png';

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
      this.iconSrc =
        lang === 'es'
          ? 'assets/icons/icon-spain.png'
          : 'assets/icons/icon-usa.png';
    });
  }

  navBar(menuOption: string) {
    this.menuOption = menuOption;
  }

  toggleLanguage() {
    const newLang = this.languageService.getLanguage() === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newLang);
  }
}
