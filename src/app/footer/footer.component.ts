import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PipeCopyrightPipe } from '../pipe-copyright.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgClass,
    PipeCopyrightPipe,
    TranslateModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contactForm!: FormGroup;
  formSubmitted = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  iconSrc: string = 'assets/icons/icon-spain.png';

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.contactForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.emailPattern),
        ],
      ],
    });

    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang);
      this.iconSrc =
        lang === 'es'
          ? 'assets/icons/icon-spain.png'
          : 'assets/icons/icon-usa.png';
    });
  }

  enviar(event: Event): void {
    event.preventDefault();
    this.contactForm.reset();
    this.formSubmitted = true;
    setTimeout(() => (this.formSubmitted = false), 3000);
  }

  hasErrors(field: string, typeError: string): boolean | undefined {
    return (
      this.contactForm.get(field)?.hasError(typeError) &&
      this.contactForm.get(field)?.touched
    );
  }

  isFieldEmpty(field: string): boolean {
    const control = this.contactForm.get(field);
    return !control || control.value === '';
  }

  toggleLanguage() {
    const newLang = this.languageService.getLanguage() === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newLang);
  }
}
