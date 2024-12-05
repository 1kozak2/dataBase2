import { Component } from '@angular/core';
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
