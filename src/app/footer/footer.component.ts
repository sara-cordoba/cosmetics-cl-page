import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PipeCopyrightPipe } from '../pipe-copyright.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgClass, PipeCopyrightPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contactForm!: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
}
