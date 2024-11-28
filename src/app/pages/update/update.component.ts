import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  referencia: string = '';
  producto: any;
  displayedColumns: string[] = ['id', 'nombre', 'valorUnitario', 'valorVenta', 'cantidad', 'categoria', 'referencia'];

  
  productos = [
    { id: 1, nombre: 'Producto A', valorUnitario: 25.5, valorVenta: 30.0, cantidad: 50, categoria: 'Bebidas', referencia: 'A123' },
    { id: 2, nombre: 'Producto B', valorUnitario: 15.0, valorVenta: 20.0, cantidad: 20, categoria: 'Snacks', referencia: 'B456' },
    
  ];

  consultarProducto() {
    const foundProduct = this.productos.find(p => p.referencia === this.referencia);
    if (foundProduct) {
      this.producto = { ...foundProduct };  
    } else {
      alert('Producto no encontrado.');
    }
  }

  guardarCambios() {
   
    console.log('Cambios guardados:', this.producto);
    alert('Producto actualizado con éxito.');
  }
}
