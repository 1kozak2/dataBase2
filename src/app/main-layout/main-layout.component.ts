import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';
import { CookieBannerComponent } from "../cookie-banner/cookie-banner.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule, CookieBannerComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
