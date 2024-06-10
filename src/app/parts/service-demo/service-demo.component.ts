import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css',
})
export class ServiceDemoComponent {
  employees: any[];
  empId: number = 0;
  emp: any;

  constructor(private e: EmployeeService) {
    this.employees = this.e.getEmployees();
  }

  showDetails(employeeId: number) {
    this.empId = employeeId;
    this.emp = this.e.getEmployeeById(employeeId);
  }
}
