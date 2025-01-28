import { Component } from '@angular/core';
import { BlogComponent } from "../blog/blog.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BlogComponent, NewsletterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
