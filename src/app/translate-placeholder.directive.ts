import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[translatePlaceholder]',
  standalone: true,
})
export class TranslatePlaceholderDirective implements OnInit {
  @Input() translatePlaceholder: string = '';

  constructor(private el: ElementRef, private translate: TranslateService) {}

  ngOnInit() {
    this.translate
      .get(this.translatePlaceholder)
      .subscribe((translatedText: string) => {
        this.el.nativeElement.placeholder = translatedText;
      });
  }
}
