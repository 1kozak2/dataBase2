import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingRequest } from '../booking-request';

@Component({
  selector: 'app-booking-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-request.component.html',
  styleUrl: './booking-request.component.css'
})
export class BookingRequestComponent implements OnInit {
  bookingForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  today = new Date().toISOString().split('T')[0];
  minCheckOutDate = new Date().toISOString().split('T')[0];

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      guestEmail: ['', [Validators.required, Validators.email]],
      guestPhone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-]{9,}$/)]],
      numberOfGuests: ['', [Validators.required, Validators.min(1)]],
      specialRequests: ['']
    });

    // Update minCheckOutDate when checkIn changes
    this.bookingForm.get('checkIn')?.valueChanges.subscribe(date => {
      if (date) {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        this.minCheckOutDate = nextDay.toISOString().split('T')[0];
        
        // Reset checkOut if it's before minCheckOutDate
        const checkOut = this.bookingForm.get('checkOut')?.value;
        if (checkOut && new Date(checkOut) <= new Date(date)) {
          this.bookingForm.patchValue({ checkOut: this.minCheckOutDate });
        }
      }
    });
  }

  ngOnInit() {
    // Initialize with current date
    this.bookingForm.patchValue({
      checkIn: this.today,
      checkOut: this.minCheckOutDate
    });
  }

  onSubmit() {
    if (this.bookingForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.errorMessage = '';

      const bookingRequest: BookingRequest = {
        ...this.bookingForm.value,
        checkIn: new Date(this.bookingForm.value.checkIn),
        checkOut: new Date(this.bookingForm.value.checkOut)
      };

      this.bookingService.createBooking(bookingRequest).subscribe({
        next: (response) => {
          console.log('Booking created:', response);
          this.router.navigate(['/booking-confirmation'], { 
            state: { bookingId: response.bookingId } 
          });
        },
        error: (error) => {
          console.error('Booking error:', error);
          this.errorMessage = 'Wystąpił błąd podczas tworzenia rezerwacji. Spróbuj ponownie.';
          this.isSubmitting = false;
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/suites-and-rooms']);
  }
}
