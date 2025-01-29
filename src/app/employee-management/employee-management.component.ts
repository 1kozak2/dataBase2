import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent implements OnInit {
  
  employeeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
  this.employeeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pesel: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  employees: any[] = [];
  isSubmitting = false;

 

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(
      employees => this.employees = employees
    );
  }

  onSubmit() {
    if (this.employeeForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.employeeService.createEmployee(this.employeeForm.value).subscribe({
        next: () => {
          this.loadEmployees();
          this.employeeForm.reset();
          this.isSubmitting = false;
        },
        error: error => {
          console.error('Error creating employee:', error);
          this.isSubmitting = false;
        }
      });
    }
  }

  deleteEmployee(id: number) {
    if (confirm('Czy na pewno chcesz usunąć tego pracownika?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => this.loadEmployees(),
        error: error => console.error('Error deleting employee:', error)
      });
    }
  }

}
