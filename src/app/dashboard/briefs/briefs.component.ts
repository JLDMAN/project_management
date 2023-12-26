import { Component, OnInit } from '@angular/core';
import { BriefService } from 'src/app/service/brief.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-briefs',
  templateUrl: './briefs.component.html',
  styleUrls: ['./briefs.component.css']
})
export class BriefsComponent implements OnInit {

  briefs: any[] =[];

  constructor(
    private brief: BriefService,
  ) {
  }

  ngOnInit() {
    this.getBriefs();
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
}
