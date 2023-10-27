import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  products: any = [];

  responsiveOptions: any[] | undefined;

  constructor(
    private router: Router
  ){
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
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
    this.router.navigate(['dashboard']);
  }

  goToSingup(){
    this.router.navigate(['signup']);
  }
}
