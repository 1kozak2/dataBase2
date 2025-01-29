export type UserRole = 'guest' | 'client' | 'manager' | 'cleaner' | 'receptionist';

export interface User {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  token: string;
}