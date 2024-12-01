import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerData = {
    name: '',
    lastname:'',
    document:'',
    date:'',
    username:'',
    password:'',
    salary:'',
    rol:''
  };
  constructor() {}

  ngOnInit(): void {}

  formSubmit(): void {
    const fields = Object.keys(this.registerData) as Array<keyof typeof this.registerData>; 
    const emptyFields = fields.filter(field => !this.registerData[field]);
  
    if (emptyFields.length > 0) {
      alert(`Por favor, no deje ningún campo vacío`);
    } else {
      console.log('Formulario enviado:', this.registerData);
      alert('Su registro fue exitoso');
      this.resetForm();
    }
  }
  resetForm(): void {
    this.registerData = {
      name: '',
      lastname:'',
      document:'',
      date:'',
      username:'',
      password:'',
      salary:'',
      rol:''
    };
  }

}
