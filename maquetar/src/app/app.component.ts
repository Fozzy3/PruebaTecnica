import { Component } from '@angular/core';

interface SidenavToggle{
  screenWith: number;
  collapsed: boolean;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'maquetar';

  isSideNavCollapsed = false;
  screenWith = 0;

  onToggleSideNav(data : SidenavToggle): void{
    this.screenWith = data.screenWith;
    this.isSideNavCollapsed = data.collapsed;
  }

}
