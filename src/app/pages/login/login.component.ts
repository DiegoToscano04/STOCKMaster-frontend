import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData ={
    "username": '',
    "password": ''
  }
  constructor(){}
    ngOnInit(): void {
      
    }
    formSubmit(){
      console.log('Click en el botón de login')
    }
  }


