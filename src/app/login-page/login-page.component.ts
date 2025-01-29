// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit(): void {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;
      
      this.authService.login(email!, password!).subscribe({
        next: (response) => {
          this.isLoading = false;
          switch (response.user.role) {
            case 'manager':
              this.router.navigate(['/manager-dashboard']);
              break;
            case 'cleaner':
              this.router.navigate(['/cleaner-dashboard']);
              break;
            case 'receptionist':
              this.router.navigate(['/reception-dashboard']);
              break;
            case 'client':
              this.router.navigate(['/client-profile']);
              break;
            default:
              this.router.navigate(['/']);
          }
        },
        error: (error) => {
          this.isLoading = false;
          // Handle error (show message)
        }
      });
    }
  }
}
