import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  showProject: boolean = false;
  showBrief: boolean = false;
  showTracker: boolean = false;
  selectedProject: string = '';
  selectedProjectDescription: string = '';
  date: string = '';
  status: string = '';
  priority: string = 'Medium';
  cols: number = 40;

  briefForm = new FormGroup({
    projectName: new FormControl(''),
    projectType: new FormControl('email'),
    timeCount: new FormControl('1'),
    timeUnit: new FormControl('day'),
    departement: new FormControl('bm'),
    assignedTo: new FormControl(''),
    priority: new FormControl('nu'),
    description: new FormControl('')
  })

  marketingOptions: any = [
    {name: "Brand marketing", value: "bm"},
    {name: "Digital marketing", value: "dm"}
  ];

  projects: any = [
    {name: "Emailer", value: "email"},
    {name: "Social Media Post", value: "social"},
    {name: "Birthday", value: "birthday"}
  ];

  timeCounter: any = [
    {count: 1, value: 1},
    {count: 2, value: 2},
    {count: 3, value: 3},
    {count: 4, value: 4},
    {count: 5, value: 5},
    {count: 6, value: 6}
  ];

  timeUnit: any = [
  {unit: "Day", value: "day"},
  {unit: "Week", value: "week"},
  {unit: "Month", value: "month"}
  ];

  priorityOptions: any = [
    {urgency: "Not urgent", value:"nu"},
    {urgency: "Medium", value:"me"},
    {urgency: "Urgent", value:"u"},
  ];

  projectProgress: any =[
    {
      icon: "pi-check", description: "Briefed: Business owner", date: "08 Sep"
    },
    {
      icon: "pi-check", description: "Copy sent for approval: Legal & compliance", date: "11 Sep"
    },
    {
      icon: "pi-check", description: "Copy approved: Legal & compliance", date: "13 Sep"
    },
    {
      icon: "pi-check", description: "Copy sent for approval: Business owner", date: "13 Sep"
    },
    {
      icon: "pi-check", description: "Copy approved: Business owner", date: "15 Sep"
    },
    {
      icon: "pi-check", description: "Design sent for approval: Legal & compliance", date: "18 Sep"
    },
    {
      icon: "pi-minus-circle", description: "Design approved: Legal & compliance", date: "waiting"
    },
    {
      icon: "pi-minus-circle", description: "Design approved: Business owner", date: "waiting"
    }
  ];

  ngOnInit(): void {
  }

  onChildSelectionChange(selectedOption: any) {
    // navigation
    this.showProject = false;
    this.selectedProject = selectedOption.projectName;
    this.selectedProjectDescription = selectedOption.projectDescription;
    this.date = new Date().toLocaleString();
    this.status = "Done";
    // navigation
    this.showTracker = false;
    this.showProject = true;
    this.showBrief = false;  
  }

  getPriorityClassColor(priority: string) {
    switch (priority) {
      case 'Urgent':
        return 'urgent-priority';
      case 'Medium':
        return 'medium-priority';
      case 'Non-urgent':
        return 'non-urgent-priority';
      default:
        return ''; // Return an empty string for unknown priorities or use a default class
    }
  }

  getIconColor(icon: string): string {
    return icon === 'pi-check' ? 'green' : icon === 'pi-minus-circle' ? 'red' : 'black'; // Default to black if not recognized
  }

  openTracker(){
    this.showTracker = true;
    this.showProject = false;
    this.showBrief = false;
  }

  closeTracker(){
    this.showTracker = false;
    this.showProject = true;
    this.showBrief = false;
  }

  moveToDone(){
    // will amend array values;
  }

  openNewBrief(){
    this.showBrief = true;
    this.showTracker = false;
    this.showProject = false;
  }

  submitBriefEntry(){
    console.log("project name: " + this.briefForm.value.projectName);
    console.log("project type: " + this.briefForm.value.projectType);
    console.log("amount of time: " + this.briefForm.value.timeCount);
    console.log("time unit " + this.briefForm.value.timeUnit);
    console.log("which departement " + this.briefForm.value.departement);
    console.log("priority status: " + this.briefForm.value.priority);
    console.log("project description: " + this.briefForm.value.description);
    this.closeTracker();
  }
}
