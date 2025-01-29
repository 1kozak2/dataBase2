import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, AsyncPipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentUser$: Observable<any>;  // Change the type to Observable<any>
  isDropdownOpen = false;
  constructor(private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser$;
  }

  getUserInitials(user: any): string {
    if (!user) return '';
    return `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase();
  }

  isEmployeeRole(role: string): boolean {
    return ['manager', 'receptionist', 'cleaner'].includes(role);
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const dropdownElement = (event.target as HTMLElement).closest('.user-dropdown');
    const buttonElement = (event.target as HTMLElement).closest('.dropdown-button');
    
    if (!dropdownElement && !buttonElement) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  getEmployeeDashboardLink(role: string): string {
    switch (role) {
      case 'manager':
        return '/manager-dashboard';
      case 'receptionist':
        return '/reception-dashboard';
      case 'cleaner':
        return '/cleaner-dashboard';
      default:
        return '/client-profile';
    }
  }

  getRoleName(role: string): string {
    switch (role) {
      case 'manager':
        return 'Managera';
      case 'receptionist':
        return 'Recepcjonisty';
      case 'cleaner':
        return 'Sprzątaczki';
      default:
        return '';
    }
  }

  logout() {
    this.authService.logout();
    // Optional: Add router navigation here if needed
  }
}


