import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { MealPlanType, RoomClassType, RoomPrices, MealPrices, BookingRequest } from '../booking-request';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-booking-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-request.component.html',
  styleUrl: './booking-request.component.css'
})
export class BookingRequestComponent implements OnInit {
  @Input() roomClass?: string;
  
  bookingForm!: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  today = new Date().toISOString().split('T')[0];
  minCheckOutDate = new Date().toISOString().split('T')[0];
  preselectedRoom?: string;
  roomClasses: RoomClassType[] = [
    'Standard',
    'Standard Rodzinny',
    'Deluxe',
    'Deluxe Rodzinny',
    'Premier',
    'Executive'
  ];
  mealPlans: MealPlanType[] = ['none', 'śniadanie, obiad i kolacja', 'sam obiad', 'samo śniadanie i kolacja'];
  constructor(
    private fb: FormBuilder,
    private roomService: BookingService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/auth/login'], {
        queryParams: { returnUrl: this.router.url }
      });
      return;
    }
    this.bookingForm = this.fb.group({
      roomClass: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-]{9,}$/)]],
      guestCount: [1, [Validators.required, Validators.min(1)]],
      mealPlan: ['none', Validators.required],
      specialRequests: ['']
    });
  }

  ngOnInit() {
    // If roomClass is provided, set it and disable the field
    if (this.roomClass) {
      this.bookingForm.patchValue({ roomClass: this.roomClass });
      this.bookingForm.get('roomClass')?.disable();
    }

    // Update minCheckOutDate when checkIn changes
    this.bookingForm.get('checkIn')?.valueChanges.subscribe(date => {
      if (date) {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        this.minCheckOutDate = nextDay.toISOString().split('T')[0];
        
        const currentCheckOut = this.bookingForm.get('checkOut')?.value;
        if (currentCheckOut && new Date(currentCheckOut) <= new Date(date)) {
          this.bookingForm.patchValue({ checkOut: this.minCheckOutDate });
        }
      }
    });
  }

  calculateRoomPrice(): number {
    const checkIn = new Date(this.bookingForm.get('checkIn')?.value);
    const checkOut = new Date(this.bookingForm.get('checkOut')?.value);
    const days = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24));
    const basePrice = this.getRoomBasePrice(this.bookingForm.get('roomClass')?.value);
    return days * basePrice;
  }
  getRoomBasePrice(roomClass: RoomClassType): number {
    return this.roomPrices[roomClass] || 0;
  }
  calculateMealPrice(): number {
    const days = this.getDays();
    const guestCount = this.bookingForm.get('guestCount')?.value || 1;
    const mealPlan = this.bookingForm.get('mealPlan')?.value as MealPlanType;
    
    return days * guestCount * this.mealPrices[mealPlan];
  }

  calculateTotal(): number {
    return this.calculateRoomPrice() + this.calculateMealPrice();
  }

  private readonly roomPrices: RoomPrices = {
    'Standard': 300,
    'Standard Rodzinny': 450,
    'Deluxe': 500,
    'Deluxe Rodzinny': 650,
    'Premier': 700,
    'Executive': 800
  };
  private readonly mealPrices: MealPrices = {
    'none': 0,
    'śniadanie, obiad i kolacja': 120,
    'sam obiad': 50,
    'samo śniadanie i kolacja': 90
  };
  getDays(): number {
    const checkIn = new Date(this.bookingForm.get('checkIn')?.value);
    const checkOut = new Date(this.bookingForm.get('checkOut')?.value);
    return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24)) || 0;
  }

  onSubmit() {
    if (this.bookingForm.valid && !this.isSubmitting) {
      const currentUser = this.authService.getCurrentUser();
      console.log('Current user in submit:', currentUser); // Debug log
  
      if (!currentUser || !currentUser.id) {
        this.errorMessage = 'Musisz być zalogowany aby dokonać rezerwacji';
        return;
      }
  
      this.isSubmitting = true;
      const bookingData = {
        clientId: currentUser.id, // Make sure clientId is included
        ...this.bookingForm.value,
        totalPrice: this.calculateTotal()
      };
  
      console.log('Sending booking data:', bookingData); // Debug log
  
      this.roomService.createBooking(bookingData).subscribe({
        next: (response) => {
          console.log('Booking response:', response); // Debug log
          this.router.navigate(['/booking-confirmation'], {
            state: { 
              bookingId: response.bookingId,
              roomNumber: response.roomNumber,
              checkIn: response.checkIn,
              checkOut: response.checkOut,
              totalPrice: this.calculateTotal()
            }
          });
        },
        error: (error) => {
          console.error('Booking error:', error); // Debug log
          this.errorMessage = error.error?.message || 'Wystąpił błąd podczas rezerwacji';
          this.isSubmitting = false;
        }
      });
    }
  }
  goBack() {
    this.router.navigate(['/rooms']);
  }
}
