import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent {
  isVisible = true;

  closeBanner() {
    this.isVisible = false;
  }
}
