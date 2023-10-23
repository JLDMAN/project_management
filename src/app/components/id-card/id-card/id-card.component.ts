import { Component, OnInit } from '@angular/core';
import { teamDetails } from '../../project-overview/project-overview/project-overview-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IdCardComponent implements OnInit {

  details: teamDetails | any;
  keyDetails: any;
  path: string = "../../../../assets/icons/";
  visible: boolean = false;
  viewID: boolean = false;
  showProjects: boolean = false;
  showCalendar: boolean = false;
  showDocs: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.details = [
      {
        userId: "Nadia",
        userKey: 0,
        userIcon: this.path + 'worker_1.png',
        userNotifications: true,
        jobsWaitingToStart: 2,
        jobsStarted: 3,
        jobsCompleted: 4
      },
      {
        userId: "Arnica",
        userKey: 1,
        userIcon: this.path + 'worker_2.png',
        userNotifications: true,
        jobsWaitingToStart: 2,
        jobsStarted: 5,
        jobsCompleted: 2
      },
      {
        userId: "Leanne",
        userKey: 2,
        userIcon: this.path + 'worker_3.png',
        userNotifications: false,
        jobsWaitingToStart: 3,
        jobsStarted: 4,
        jobsCompleted: 3
      }
    ];

    this.viewID = true;
  }

  navigateToChat() {
    this.router.navigate(['dashboard/chat'])
  }

  showDialog(key: any) {
    this.keyDetails = [];
    this.visible = true;
    this.keyDetails = this.details[key];
    // console.log(this.keyDetails.userId);
  }

  projectsPopup() {
    this.showProjects = true;
    this.showCalendar = false;
    this.showDocs = false;
  }

  calendarPopup() {
    this.showCalendar = true;
    this.showDocs = false;
    this.showProjects = false;
  }

  docsPopup() {
    this.showDocs = true;
    this.showCalendar = false;
    this.showProjects = false;
  }

}
