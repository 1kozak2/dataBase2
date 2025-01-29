import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User, AuthResponse, UserRole } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/api';
  private currentUserSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  private getUserFromStorage() {
    const userStr = localStorage.getItem('currentUser');
    try {
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(response => {
          console.log('Login response:', response); // Debug log
          if (response.user && response.token) {
            // Store complete user object
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            localStorage.setItem('token', response.token);
            this.currentUserSubject.next(response.user);
          }
        })
      );
  }


  register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, userData);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserSubject.value?.role === role;
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getCurrentUser() {
    const user = this.currentUserSubject.value;
    console.log('Current user:', user); // Debug log
    return user;
  }

  isAuthenticated(): boolean {
    const user = this.getCurrentUser();
    console.log('Is authenticated check:', user); // Debug log
    return !!user && !!user.id;
  }
}