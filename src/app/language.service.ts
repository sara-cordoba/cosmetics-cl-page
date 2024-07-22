import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('es');
  currentLang$ = this.currentLangSubject.asObservable();

  setLanguage(lang: string) {
    this.currentLangSubject.next(lang);
  }

  getLanguage() {
    return this.currentLangSubject.value;
  }
}
