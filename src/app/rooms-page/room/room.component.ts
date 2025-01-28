import { Component, Input } from '@angular/core';
import { RoomData } from './room.interface';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  @Input() roomData!: RoomData;

  onBookNow() {
    // Add booking logic here
    console.log('Booking room:', this.roomData.title);
  }
}
