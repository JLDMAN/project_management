import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() iconName: string = '';
  @Input() buttonName: string = ''; 

  ngOnInit(): void {
    // console.log("inside button component: names - " + this.buttonName);
    // console.log("inside button component: png - " + this.iconName);
  }
}