import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;  
  isInHomePage = false;  
  isInAdminPage = false; 
  isInProductsPage = false; 
  isLogoClickable = false; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isInHomePage = event.url === '/';
        this.isInAdminPage = event.url === '/admin';
        this.isInProductsPage = event.url === '/products';

        this.isLogoClickable = event.url === '/' || event.url === '/login';
        
        this.updateLoginStatus();
      }
    });
  }

  updateLoginStatus(): void {
    
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
