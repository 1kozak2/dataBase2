import { Component } from '@angular/core';
import { RoomData } from '../room/room.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { describe } from 'node:test';
import { BookingComponent } from '../../booking/booking.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingRequestComponent } from "../../booking/booking-request/booking-request.component";
@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [HttpClientModule, BookingRequestComponent],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css'
})
export class RoomDetailComponent {
  room?: RoomData;
  features: any[] = [];
  showBookingForm = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.room = this.roomService.getRoomById(id);
      if (this.room) {
        this.features = [
          { title: 'Udogodnienia', description: this.room.amenities },
          { title: 'Wyposażenie dodatkowe', description: this.room.additionalEquipment },
          { title: 'Widok', description: this.room.view },
          { title: 'Cena', description: this.room.price + ' złotych za jedną noc'}
        ];
      }
    }
  }

  goBack() {
    this.router.navigate(['/suites-and-rooms']);
  }
  onBookNow() {
    this.showBookingForm = true;
  }
}
