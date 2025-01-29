import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingRequest } from '../booking/booking-request';
import { Booking } from '../client-profile/client-profile.component';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3001/api'; // Your backend URL

  constructor(private http: HttpClient) {}

  checkAvailability(roomId: string, checkIn: Date, checkOut: Date): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/availability`, {
      params: {
        roomId,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString()
      }
    });
  }

  createBooking(bookingData: any): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    const bookingWithClientId = {
      clientId: currentUser.id,  // Add clientId to the request
      ...bookingData,
    };
    return this.http.post(`${this.apiUrl}/bookings`, bookingWithClientId);
  }

  getBooking(bookingId: number): Observable<BookingRequest> {
    return this.http.get<BookingRequest>(`${this.apiUrl}/bookings/${bookingId}`);
  }
  getUserBookings(userId: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/bookings/user/${userId}`);
  }
  updateBooking(bookingId: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/bookings/${bookingId}`, { status });
  }

  cancelBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/bookings/${bookingId}`);
  }
  getBookingById(bookingId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookings/${bookingId}`);
  }
}