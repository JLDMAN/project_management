import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  constructor(
    private router: Router,
  ){

  }

  signupForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    passwordCheck: new FormControl(),
    status: new FormControl()
  });

  singup(){
  }

  goTologin(){
    this.router.navigate(['login']);
  }
}
