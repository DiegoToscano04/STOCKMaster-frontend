import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginData = { username: '', password: '' };
  errorMessages = { username: '', password: '' };

  constructor() {}

  ngOnInit(): void {}

  formSubmit(): void {
    let isValid = true;
    let showAlert = false;


    this.errorMessages = { username: '', password: '' };

  
    if (!this.loginData.username.trim()) {
      this.errorMessages.username = 'El nombre de usuario es obligatorio.';
      isValid = false;
      showAlert = true; 
    }

    
    if (!this.loginData.password.trim()) {
      this.errorMessages.password = 'La contraseña es obligatoria.';
      isValid = false;
      showAlert = true;
    }

   
    if (showAlert) {
      alert('Por favor, rellena los campos vacíos.');
    }

  
    if (isValid) {
      console.log('Formulario enviado');
    }
  }
}
