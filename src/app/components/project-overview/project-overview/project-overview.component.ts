import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Briefed, Waiting, InProgress, Done } from './project-overview-interface';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  briefed: Briefed | any;
  countOfBrief: number = 0;
  waiting: Briefed | any;
  countOfWaiting: number = 0;
  inProgress: Briefed | any;
  countOfInProgress: number = 0;
  done: Briefed | any;
  countOfDone: number = 0;

  selectedProject: Briefed | undefined;

  @Output() selectedOptionChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.briefed = [
      { projectName: 'Project A1', projectDescription: 'Project about concept A1' },
      { projectName: 'Project A2', projectDescription: 'Project about concept A2' },
      { projectName: 'Project A3', projectDescription: 'Project about concept A3' }
    ];
    this.countOfBrief = this.briefed.length;

    this.waiting = [
      { projectName: 'Project B1', projectDescription: 'Project about concept B1' },
      { projectName: 'Project B2', projectDescription: 'Project about concept B2' },
      { projectName: 'Project B3', projectDescription: 'Project about concept B3' }
    ];
    this.countOfWaiting = this.waiting.length;

    this.inProgress = [
      { projectName: 'Project C1', projectDescription: 'Project about concept C1' },
      { projectName: 'Project C2', projectDescription: 'Project about concept C2' },
      { projectName: 'Project C3', projectDescription: 'Project about concept C3' }
    ];
    this.countOfInProgress = this.inProgress.length;

    this.done = [
      { projectName: 'Project D1', projectDescription: 'Project about concept D1' },
      { projectName: 'Project D2', projectDescription: 'Project about concept D2' },
      { projectName: 'Project D3', projectDescription: 'Project about concept D3' }
    ];
    this.countOfDone = this.done.length;
  }

  onSelectionChange() {
    this.selectedOptionChange.emit(this.selectedProject);
    console.log(this.selectedProject);
  }
}
