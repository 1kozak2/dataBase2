import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';
import { DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-booking-conf',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './booking-conf.component.html',
  styleUrl: './booking-conf.component.css'
})
export class BookingConfComponent  {
  booking: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.booking = navigation?.extras.state;
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
