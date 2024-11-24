import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    
    this.updateLoginStatus();
    this.router.events.subscribe(() => this.updateLoginStatus());
  }

  updateLoginStatus():void{
    this.isLoggedIn = this.router.url.includes('/admin');
  }

  logout():void{
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
