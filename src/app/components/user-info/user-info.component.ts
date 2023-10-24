import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  user: string = "worker 1";
  workerId: string = "worker_1.png";

  date: number = Date.now();

  meetings: boolean = false;
  numberOfMeetings: number = 0;

}
