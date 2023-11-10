import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router
  ){
  }

  names: any[] = [
    { buttonName: 'Home', iconName: 'Home.png' },
    { buttonName: 'Chat', iconName: 'Chat.png' },
    { buttonName: 'Projects', iconName: 'Projects.png' },
    { buttonName: 'Calendar', iconName: 'Calendar.png' },
    { buttonName: 'Dashboard', iconName: 'Dashboard.png' },
    { buttonName: 'Docs', iconName: 'Docs.png' },
    { buttonName: 'Notes', iconName: 'Notes.png' },
    { buttonName: 'Archive', iconName: 'Archive.png'}
  ];

  Logout: string = 'Logout';
  logoutIcon: string = 'Logout.png';

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}