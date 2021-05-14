import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { registerLocaleData } from '@angular/common';
import { UserService } from 'src/app/services.service';
// import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  userName: string = '';
  nameError: string = '';
  departmentsList = ['HR', 'Sales', 'Finance', 'Engineer', 'Others'];
  checkedDepartments: any = [];
  salary: number = 30000;
  day: number = 0;
  month: string = '';
  year: number = 0;
  note: string = '';

  constructor(private userService: UserService) {}

  getDepartment(dept: string) {
    if (!this.checkedDepartments.includes(dept)) {
      this.checkedDepartments.push(dept);
    } else {
      let index = this.checkedDepartments.indexOf(dept);
      this.checkedDepartments.splice(index, 1);
    }
    console.log(this.checkedDepartments);
  }

  createEmployee(data: any) {
    console.log("request send",data)
    let requestobj=         {
      "name": "Viresh",
      "salary": 5000,
      "gender": "male",
      "startDate": "2020-01-18",
      "note": "hii there",
      "profilePic": ":",
      "departments": [
          "hr",
          "sale","Finance"
      ]
}
    this.userService.addEmployee(data).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
  onInput($event: any) {
    console.log('Change Event Occurred', $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = '';
      return;
    }
    this.nameError = 'Name is Incorrect';
  }
  submitForm(register: any) {
    let data = this.addEmp(register);
    this.createEmployee(data);
    console.log(data);
  }

  addEmp(register: any) {
    let date =
      register.value.Day +
      '/' +
      register.value.Month +
      '/' +
      register.value.Year;
    let response = {
      name: register.value.name,
      salary: register.value.salary,
      gender: register.value.gender,
      startDate: date,
      profilePic: register.value.profile,
      note: register.value.Notes,
      departments: this.checkedDepartments,
    };
    return response;
  }
}