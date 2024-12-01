import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  public isMobile: boolean = false;
  public isActive: boolean = false;

  constructor() {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkMobile();
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.isActive = true; 
    }
  }

  toggleSidebar(): void {
    this.isActive = !this.isActive;
  }
}
