import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/userservice.service';
import { Message} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  products: any = [];
  responsiveOptions: any[] | undefined;
  messages: Message[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ){
  }

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
    this.products = [
      {image: "Asset_1.png", name:"working lady1", background: "yellow"},
      {image: "Asset_5.png", name:"working lady", background: "green"},
      {image: "Asset_6.png", name:"working lady", background: "blue"}
    ];

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}

  login(){
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    if (userName === '' || password === '') {
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Please fill in all fields.' }];
    }else{
      this.userService.loginUser(userName, password).subscribe( 
        (res: any) => {
          this.router.navigate(['dashboard']);
      },(error) => {
        this.messages = [{ severity: 'error', summary: 'Error', detail: 'User not found please check credentials.' }];
      })
    }
  }

  goToSingup(){
    this.router.navigate(['signup']);
  }
}
