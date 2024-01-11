import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BriefService } from 'src/app/service/brief.service';
import { Message} from 'primeng/api';

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
  messages: Message[] = [];

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
    { name: "Brand marketing", value: "bm" },
    { name: "Digital marketing", value: "dm" },
    { name: "UX/Ui", value: "ux" },
    { name: "Events", value: "ev" },
    { name: "Affiliates", value: "af" },

  ];

  projects: any = [
    { name: "Emailer", value: "email" },
    { name: "Social Media Post", value: "social" },
    { name: "Personal KPPD", value: "kppd" }
  ];

  timeCounter: any = [
    { count: 1, value: 1 },
    { count: 2, value: 2 },
    { count: 3, value: 3 },
    { count: 4, value: 4 },
    { count: 5, value: 5 },
    { count: 6, value: 6 }
  ];

  timeUnit: any = [
    { unit: "Day", value: "day" },
    { unit: "Week", value: "week" },
    { unit: "Month", value: "month" }
  ];

  priorityOptions: any = [
    { urgency: "Not urgent", value: "nu" },
    { urgency: "Medium", value: "me" },
    { urgency: "Urgent", value: "u" },
  ];

  projectProgress: any = [
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

  constructor(
    private briefed: BriefService
  ) {

  }

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

  openTracker() {
    this.showTracker = true;
    this.showProject = false;
    this.showBrief = false;
  }

  closeTracker() {
    this.showTracker = false;
    this.showProject = true;
    this.showBrief = false;
  }

  moveToDone() {
    // will amend array values;
  }

  openNewBrief() {
    this.showBrief = true;
    this.showTracker = false;
    this.showProject = false;
  }

  submitBriefEntry() {
    const form = this.briefForm.value;

    // this.closeTracker();
    if (form){
      this.briefed.createBrief(
          localStorage.getItem('userId'),
          form.projectName, 
          form.projectType, 
          form.timeCount, 
          form.timeUnit, 
          form.departement, 
          form.priority, 
          form.description).subscribe(
        (res: any) => {
          this.messages = [{ severity: 'success', summary: 'Success', detail: 'Brief has been created' }];
        }, (error: any) => {
          this.messages = [{ severity: 'error', summary: 'Error', detail: 'Brief not created, duplicate information provided'}];
        })
    } else {
      console.log("breif is blank, enter data");
    }
  }
}
