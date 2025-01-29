import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';
import { DatePipe } from '@angular/common';

export interface Booking {
  ID: string;
  Termin_rezerwacji: string;
  Termin_wymeldowania: string;
  Wyzywienie: string;
  DoZaplaty: number;
  roomNumber: string;
  roomClass: string;
}
@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent implements OnInit {
  currentUser: any;
  bookings: Booking[] = [];
  isLoading = true;

  constructor(
    private authService: AuthService,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadBookings();
  }

  get userInitials(): string {
    if (!this.currentUser) return '';
    return `${this.currentUser.firstName.charAt(0)}${this.currentUser.lastName.charAt(0)}`;
  }

  loadBookings() {
    this.isLoading = true;
    this.bookingService.getUserBookings(this.currentUser.id).subscribe({
      next: (bookings) => {
        this.bookings = bookings;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading bookings:', error);
        this.isLoading = false;
      }
    });
  }

  isUpcoming(date: string): boolean {
    return new Date(date) > new Date();
  }

}
