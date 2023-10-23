import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  jobs: any =[];
  month: any = [0,1,2,3,4,5];
  week: any = [0,1,2,3,4,5,6];
  dayNames: any = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  monthNames: any = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  ngOnInit(): void {
    this.jobs = [
      {jobId: 'Project A', jobDescription: 'Jobs to do for project A', jobDueDate: '24/12/2023', jobStatus: 'Waiting'},
      {jobId: 'Project B', jobDescription: 'Jobs to do for project B', jobDueDate: '11/12/2023', jobStatus: 'Done'},
      {jobId: 'Project C', jobDescription: 'Jobs to do for project C', jobDueDate: '17/12/2023', jobStatus: 'Briefed'},
      {jobId: 'Project D', jobDescription: 'Jobs to do for project D', jobDueDate: '16/11/2023', jobStatus: 'In Progress'},
    ]
  }
}
