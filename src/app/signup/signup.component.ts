import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/userservice.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  statusOptions: any = ['manager', 'member', 'client'];
  department: any = [
    {option: 'Digital Marketing', value:'dm'},
    {option: 'Brand Marketing', value:'bm'}, 
    {option: 'Affiliates', value: 'af'},
    {option: 'Events', value:'ev'}
  ];
  messages: Message[] = [];
  managerStatus: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {

  }

  signupForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordCheck: new FormControl(''),
    status: new FormControl(''),
    department: new FormControl('')
  });

  goTologin() {
    this.router.navigate(['login']);
  }

  singUp() {
    const userName = this.signupForm.value.userName;
    const password = this.signupForm.value.password;
    const email = this.signupForm.value.email;
    const status = this.signupForm.value.status;
    const department = this.signupForm.value.department;

    if (userName === '' || password === '' || email === '' || status === null) {
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Please fill in all fields.' }];
    } else {
      this.userService.registerUser(userName, status, password, email, department).subscribe(
        (res: any) => {
          // Handle success (e.g., show a success message)
          console.log('User registered:', res);
          this.messages = [{ severity: 'success', summary: 'Success', detail: 'User account created, try logging in.' }];
        },
        (error) => {
          // Handle error (e.g., show an error message)
          console.log('Registration failed:', error);
          this.messages = [{ severity: 'error', summary: 'Error', detail: 'Email account already used.' }]
        })
    }
  }

  checkUser() {
    if (this.signupForm.value.status === 'manager') {
      this.managerStatus = true;
    } else {
      this.managerStatus = false;
    }
  }
}
