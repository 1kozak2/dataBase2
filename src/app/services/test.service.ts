import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {}

  testConnection() {
    return this.http.get(`${this.apiUrl}/test`);
  }
}