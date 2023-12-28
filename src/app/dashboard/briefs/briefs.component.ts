import { Component, OnInit } from '@angular/core';
import { BriefService } from 'src/app/service/brief.service';
import {TableModule} from 'primeng/table';
import { Message} from 'primeng/api';
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
  briefs: any[] =[];
  messages: Message[] = [];

  constructor(
    private brief: BriefService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    // this.getBriefs();
    this.getMembers();
  }

  getBriefs() {
    this.brief.getBriefs().subscribe(
      (res: any) => {
        this.briefs = res.briefs;
        console.log(this.briefs);
      }, (error: any) => {
        console.log(error);
      })
  }

  assignTeamMember(briefId: number){
    if(briefId){
      this.messages = [{ severity: 'success', summary: 'Success', detail: 'Brief has been assigned to' + this.selectedMember }];
    }else{
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Select valid user'}];
    }
  }

  getMembers(){
    this.userService.getTeamMembers().subscribe(
      (res: any)=>{

      },(error: any)=>{

      }
    )
  }
}
