import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userData = this.authService.getCurrentUser();
  }
}
