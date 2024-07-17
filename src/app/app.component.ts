import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shoppingpage-angular';
  menuOption: string = '';
  currentLang: string = 'es';
  iconSrc: string = 'assets/icons/icon-spain.png';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      this.translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
    } else {
      this.translate.use('es');
    }
  }

  navBar(menuOption: string) {
    this.menuOption = menuOption;
  }

  toggleLanguage() {
    if (this.currentLang === 'es') {
      this.currentLang = 'en';
      this.iconSrc = 'assets/icons/icon-usa.png';
    } else {
      this.currentLang = 'es';
      this.iconSrc = 'assets/icons/icon-spain.png';
    }
    this.translate.use(this.currentLang);
  }
}
