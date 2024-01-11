import { Component, OnInit } from '@angular/core';
import { BriefService } from 'src/app/service/brief.service';
import { TableModule } from 'primeng/table';
import { Message } from 'primeng/api';
import { UserService } from 'src/app/service/userservice.service';

interface TeamMembers {
  userId: string;
  userName: string;
}

@Component({
  selector: 'app-briefs',
  templateUrl: './briefs.component.html',
  styleUrls: ['./briefs.component.css']
})
export class BriefsComponent implements OnInit {

  members: TeamMembers[] | undefined;
  selectedMember: TeamMembers | undefined;
  briefs: any[] = [];
  briefStructure: any[] = [];
  messages: Message[] = [];
  tableHeadings: any[] = [];
  status: any = '';

  constructor(
    private brief: BriefService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.getMembers();
    this.getBriefs();

    this.status = localStorage.getItem('userStatus');
    switch (this.status) {
      case 'client':
        this.tableHeadings = [
          'Project',
          'Description',
          'Progress',
        ]

        this.briefStructure = [
          'project_name',
          'description',
          'progress',
        ]
        break;
      case 'member':
        this.tableHeadings = [
          'Project',
          'Project Type',
          'Departement',
          'Description',
          'Progress',
        ]

        this.briefStructure = [
          'project_name',
          'project_type',
          'department',
          'description',
          'progress',
        ]
        break;
      case 'manager':
        this.tableHeadings = [
          'Project',
          'Project Type',
          'Departement',
          'Description',
          'Progress',
          'Assign To Team Member'
        ]

        this.briefStructure = [
          'project_name',
          'project_type',
          'department',
          'description',
          'progress',
        ]
        break;
    }
  }

  getBriefs() {
    const user = localStorage.getItem('userId');
    const status = localStorage.getItem('userStatus')

        this.brief.getBriefs(user, status).subscribe(
          (res: any) => {
            this.briefs = res.briefs; // Assign the entire array directly
            console.log(this.briefs);
          },
          (error: any) => {
            console.log(error);
          });
  }


  assignTeamMember() {
    // if(briefId){
    //   this.messages = [{ severity: 'success', summary: 'Success', detail: 'Brief has been assigned to' + this.selectedMember }];
    // }else{
    //   this.messages = [{ severity: 'error', summary: 'Error', detail: 'Select valid user'}];
    // }
  }

  getMembers() {
    this.userService.getTeamMembers().subscribe(
      (res: any) => {
      }, (error: any) => {
      }
    )
  }
}
