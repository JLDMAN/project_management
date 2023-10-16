import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() iconName: string = '';
  @Input() buttonName: string = ''; 

  constructor(
    private router: Router
  ){

  }

  ngOnInit(): void {
    // console.log("inside button component: names - " + this.buttonName);
    // console.log("inside button component: png - " + this.iconName);
  }

  navigate(){
    this.router.navigate(['dashboard/' + this.buttonName.toLowerCase()]);
    console.log(this.buttonName.toLowerCase());
  }
}