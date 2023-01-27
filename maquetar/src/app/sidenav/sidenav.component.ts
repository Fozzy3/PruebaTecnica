import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SidenavToggle{
  screenWith: number;
  collapsed: boolean;

}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SidenavToggle> = new EventEmitter();
  collapsed = false;
  screenWith = 0;
  navData = navbarData;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,  screenWith: this.screenWith})
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,  screenWith: this.screenWith})

  }
}
