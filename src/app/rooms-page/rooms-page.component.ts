import { Component } from '@angular/core';
import { RoomComponent } from './room/room.component';

import { Router } from '@angular/router';
import { RoomService } from '../services/room.service';
@Component({
  selector: 'app-rooms-page',
  standalone: true,
  imports: [],
  templateUrl: './rooms-page.component.html',
  styleUrl: './rooms-page.component.css'
})
export class RoomsPageComponent {
  rooms;

  constructor(
    private roomService: RoomService,
    private router: Router
  ) {
    this.rooms = this.roomService.getAllRooms();
  }

  navigateToRoom(roomId: string) {
    this.router.navigate(['/suites-and-rooms', roomId]);
  }
}
