export interface BookingRequest {
    id?: number;
    roomId: string;
    checkIn: Date;
    checkOut: Date;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    numberOfGuests: number;
    specialRequests?: string;
    totalPrice?: number;
    status?: 'pending' | 'confirmed' | 'cancelled';
    createdAt?: Date;
  }