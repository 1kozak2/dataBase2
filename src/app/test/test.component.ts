
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  status: string = '';
  error: string = '';

  constructor(private testService: TestService) {}

  testConnection() {
    this.status = 'Testing connection...';
    this.error = '';

    this.testService.testConnection().subscribe({
      next: (response: any) => {
        this.status = `Connection successful! Server message: ${response.message}, DB result: ${response.dbResult}`;
      },
      error: (err) => {
        console.error('Connection error:', err);
        this.error = 'Connection failed. Check console for details.';
        this.status = '';
      }
    });
  }

  ngOnInit() {
    this.testConnection();
  }
}