import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToFaceSection(query: string) {
    this.router.navigate(['/face'], {
      queryParams: { q: query },
    });
  }

  getImageSource() {}
}
