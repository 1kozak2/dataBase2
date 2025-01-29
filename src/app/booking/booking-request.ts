export type MealPlanType = 'none' | 'śniadanie, obiad i kolacja' | 'sam obiad' | 'samo śniadanie i kolacja';
export type RoomClassType = 'Standard' | 'Standard Rodzinny' | 'Deluxe' | 'Deluxe Rodzinny' | 'Premier' | 'Executive';

export interface BookingRequest {
  bookingId?: string;
  roomClass: RoomClassType;
  checkIn: Date;
  checkOut: Date;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  guestCount: number;
  mealPlan: MealPlanType;
  specialRequests?: string;
  totalPrice?: number;
  roomNumber?: string;
}
export interface RoomPrices {
  [key: string]: number;
}

export interface MealPrices {
  [key: string]: number;
}