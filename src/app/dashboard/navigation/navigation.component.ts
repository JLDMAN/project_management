import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  names: any[] = [];
  Logout: string = 'Logout';
  logoutIcon: string = 'Logout.png';

  constructor(
    private router: Router,
    private service: UserService
  ){
  }

  ngOnInit(): void {
    const status = localStorage.getItem('userStatus');
    console.log("user status recieved afetr login: " + status);

    switch (status) {
      case 'admin':
        this.names = [
          { buttonName: 'Home', iconName: 'Home.png' },
          { buttonName: 'Chat', iconName: 'Chat.png' },
          { buttonName: 'Projects', iconName: 'Projects.png' },
          { buttonName: 'Calendar', iconName: 'Calendar.png' },
          { buttonName: 'Dashboard', iconName: 'Dashboard.png' },
          { buttonName: 'Docs', iconName: 'Docs.png' },
          { buttonName: 'Notes', iconName: 'Notes.png' },
          { buttonName: 'Archive', iconName: 'Archive.png'},
          { buttonName: 'Briefs', iconName: 'Docs.png'}
        ];
        break;
      case 'client':
        this.names = [
          { buttonName: 'Home', iconName: 'Home.png' },
          { buttonName: 'Projects', iconName: 'Projects.png' },
          { buttonName: 'Briefs', iconName: 'Docs.png'}
        ];
        break;
      case 'manager':
        this.names = [
          { buttonName: 'Chat', iconName: 'Chat.png' },
          { buttonName: 'Briefs', iconName: 'Docs.png'}
        ];
        break;
      case 'member':
        this.names = [
          { buttonName: 'Archive', iconName: 'Archive.png'},
          { buttonName: 'Briefs', iconName: 'Docs.png'}
        ];
        break;
      default:
        this.names = [
          { buttonName: 'err', iconName: '' }
        ];
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}