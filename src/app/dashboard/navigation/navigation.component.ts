import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  names: any[] = [
    { buttonName: 'Home', iconName: 'Icon.png' },
    { buttonName: 'Chat', iconName: 'Icon.png' },
    { buttonName: 'Projects', iconName: 'Icon.png' },
    { buttonName: 'Calendar', iconName: 'Icon.png' },
    { buttonName: 'Dashboard', iconName: 'Icon.png' },
    { buttonName: 'Docs', iconName: 'Icon.png' },
    { buttonName: 'Notes', iconName: 'Icon.png' },
    { buttonName: 'Archive', iconName: 'Icon.png' }
  ];

  Logout: string = 'Icon';

  ngOnInit(): void {
  }
}