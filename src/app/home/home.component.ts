import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}
  employee: any = [];
  empId: any;
  ngOnInit(): void {
    this.userService.getEmployeeList().subscribe((res) => {
      console.log(res);
      this.employee = res;
    });
  }

  onDelete(empId: any) {
    console.log(empId);
    this.userService.deleteEmployee(empId).subscribe((res) => {
      console.log(res);
    });
  }

  onUpdate(empId: any, data: any) {
    console.log(empId, data);
    this.userService.updateEmployee(empId, data).subscribe((res) => {
      console.log(res);
    });
  }

  
}
