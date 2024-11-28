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
  // Inicializamos un producto vacío
  product: Product = {
    name: '',
    type: '',
    unitValue: 0,
    saleValue: 0,
    quantity: 0,
    reference: ''
  };

  // Lista para almacenar los productos agregados
  productList: Product[] = [];

  constructor() {}

  /**
   * Agregar un producto a la lista
   */
  addProduct(): void {
    // Validamos que todos los campos estén completos y correctos
    if (
      this.product.name.trim() &&
      this.product.type.trim() &&
      this.product.unitValue > 0 &&
      this.product.saleValue > 0 &&
      this.product.quantity > 0 &&
      this.product.reference.trim()
    ) {
      // Agregamos una copia del producto a la lista
      this.productList.push({ ...this.product });

      // Reiniciamos el formulario
      this.clearForm();

      // Mensaje de éxito
      console.log('Producto agregado correctamente:', this.productList);
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  /**
   * Limpiar el formulario para agregar un nuevo producto
   */
  clearForm(): void {
    this.product = {
      name: '',
      type: '',
      unitValue: 0,
      saleValue: 0,
      quantity: 0,
      reference: ''
    };
  }
}
