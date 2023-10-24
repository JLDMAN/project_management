import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  showProject: boolean = false;
  showBrief: boolean = false;
  showTracker: boolean = false;
  selectedProject: string = '';
  selectedProjectDescription: string = '';
  date: string = '';
  status: string = '';
  priority: string = 'Medium';

  projectProgress: any =[
    {
      icon: "done", description: "Briefed: Business owner", date: "08 Sep"
    },
    {
      icon: "done", description: "Copy sent for approval: Legal & compliance", date: "08 Sep"
    },
    {
      icon: "done", description: "Briefed: Business owner", date: "08 Sep"
    },
    {
      icon: "notDone", description: "Briefed: Business owner", date: "08 Sep"
    },
    {
      icon: "notDone", description: "Briefed: Business owner", date: "08 Sep"
    }
  ]

  onChildSelectionChange(selectedOption: any) {
    this.showProject = false;
    this.selectedProject = selectedOption.projectName;
    this. selectedProjectDescription = selectedOption.projectDescription;
    this.date = new Date().toLocaleString();
    this.status = "Done";
    this.showProject = !this.showProject;    
  }

  getPriorityClass(priority: string) {
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

  openTracker(){
    this.showTracker = !this.showTracker;
    this.showProject = !this.showProject;
  }

  closeTracker(){
    this.showTracker = !this.showTracker;
    this.showProject = !this.showProject;
  }

  moveToDone(){
    // will amend array values;
  }
}
