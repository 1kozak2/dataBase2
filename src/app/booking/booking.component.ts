import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { RoomData } from '../rooms-page/room/room.interface';
import { BookingRequest } from './booking-request';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,CurrencyPipe, ReactiveFormsModule, HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  @Input() room!: RoomData;
  bookingForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {
    this.bookingForm = this.fb.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      guestPhone: ['', Validators.required],
      numberOfGuests: ['', [Validators.required, Validators.min(1)]],
      specialRequests: ['']
    });
  }

  calculateTotal(): number {
    const checkIn = new Date(this.bookingForm.get('checkIn')?.value);
    const checkOut = new Date(this.bookingForm.get('checkOut')?.value);
    const days = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24));
    return (days > 0 ? days : 0) * this.room.price;
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isSubmitting = true;
      const bookingData: BookingRequest = {
        roomId: this.room.id,
        ...this.bookingForm.value
      };

      this.bookingService.checkAvailability(
        this.room.id,
        bookingData.checkIn,
        bookingData.checkOut
      ).subscribe(isAvailable => {
        if (isAvailable) {
          this.bookingService.createBooking(bookingData).subscribe({
            next: (response) => {
              // Handle successful booking
              console.log('Booking confirmed:', response);
              // Add success notification
              this.isSubmitting = false;
            },
            error: (error) => {
              console.error('Booking failed:', error);
              // Add error notification
              this.isSubmitting = false;
            }
          });
        } else {
          // Room not available for selected dates
          console.error('Room not available for selected dates');
          this.isSubmitting = false;
        }
      });
    }
  }
}
