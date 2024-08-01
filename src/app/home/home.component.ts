import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  skinTypeUrls: { en: string; es: string }[] = [
    {
      en: 'assets/test-home/normal-skin-en.png',
      es: 'assets/test-home/normal-skin.png',
    },
    {
      en: 'assets/test-home/dry-skin-en.png',
      es: 'assets/test-home/dry-skin.png',
    },
    {
      en: 'assets/test-home/mixed-skin-en.png',
      es: 'assets/test-home/mixed-skin.png',
    },
    {
      en: 'assets/test-home/oily-skin-en.png',
      es: 'assets/test-home/oily-skin.png',
    },
  ];

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {}

  get currentLanguage(): 'en' | 'es' {
    return this.translateService.currentLang as 'en' | 'es';
  }

  goToFaceSection(query: string) {
    this.router.navigate(['/face'], {
      queryParams: { q: query },
    });
  }
}
