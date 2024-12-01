import { Component } from '@angular/core';

interface Product {
  name: string;
  type: string;
  unitValue: number;
  saleValue: number;
  quantity: number;
  reference: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addProduct: Product = {
    name: '',
    type: '',
    unitValue: 0,
    saleValue: 0,
    quantity: 0,
    reference: ''
  };

  errorMessages = {
    name: '',
    type: '',
    unitValue: '',
    saleValue: '',
    quantity: '',
    reference: ''
  };

  constructor() {}

  formSubmit(): void {
    let isValid = true;

    // Validaciones
    if (!this.addProduct.name.trim()) {
      this.errorMessages.name = 'Es necesario colocar el nombre del producto.';
      isValid = false;
    } else {
      this.errorMessages.name = '';
    }

    if (!this.addProduct.type.trim()) {
      this.errorMessages.type = 'Es necesario colocar el tipo del producto.';
      isValid = false;
    } else {
      this.errorMessages.type = '';
    }

    if (!this.isNumberValid(this.addProduct.unitValue)) {
      this.errorMessages.unitValue = 'Es necesario colocar un valor unitario válido.';
      isValid = false;
    } else {
      this.errorMessages.unitValue = '';
    }

    if (!this.isNumberValid(this.addProduct.saleValue)) {
      this.errorMessages.saleValue = 'Es necesario colocar un valor de venta válido.';
      isValid = false;
    } else {
      this.errorMessages.saleValue = '';
    }

    if (!this.isNumberValid(this.addProduct.quantity)) {
      this.errorMessages.quantity = 'Es necesario colocar una cantidad válida.';
      isValid = false;
    } else {
      this.errorMessages.quantity = '';
    }

    if (!this.addProduct.reference.trim()) {
      this.errorMessages.reference = 'Es necesario colocar la referencia del producto.';
      isValid = false;
    } else {
      this.errorMessages.reference = '';
    }

    if (isValid) {
      console.log('Producto agregado:', this.addProduct);
      alert('Producto agregado correctamente.');
      this.resetForm();
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  isNumberValid(value: number): boolean {
    return value !== null && value > 0;
  }

  resetForm(): void {
    this.addProduct = {
      name: '',
      type: '',
      unitValue: 0,
      saleValue: 0,
      quantity: 0,
      reference: ''
    };
    this.errorMessages = {
      name: '',
      type: '',
      unitValue: '',
      saleValue: '',
      quantity: '',
      reference: ''
    };
  }
}
