import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
'referemcia'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'valorUnitario', 'valorVenta', 'cantidad', 'categoria','referencia'];
  dataSource = new MatTableDataSource(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
  }
}
const PRODUCTS = [
  { id: 1, nombre: 'Producto A', valorUnitario: 25.5, valorVenta: 30.0, cantidad: 50, categoria: 'Bebidas', referencia: 'A123' },
  { id: 2, nombre: 'Producto B', valorUnitario: 15.0, valorVenta: 20.0, cantidad: 20, categoria: 'Snacks', referencia: 'B456' },
  { id: 3, nombre: 'Producto C', valorUnitario: 40.0, valorVenta: 45.0, cantidad: 30, categoria: 'Electrónica', referencia: 'C789' },
  { id: 4, nombre: 'Producto D', valorUnitario: 60.0, valorVenta: 70.0, cantidad: 40, categoria: 'Hogar', referencia: 'D012' },
  { id: 5, nombre: 'Producto E', valorUnitario: 35.0, valorVenta: 40.0, cantidad: 25, categoria: 'Ropa', referencia: 'E345' },
  { id: 6, nombre: 'Producto F', valorUnitario: 50.0, valorVenta: 55.0, cantidad: 10, categoria: 'Deportes', referencia: 'F678' },
  { id: 7, nombre: 'Producto G', valorUnitario: 20.0, valorVenta: 25.0, cantidad: 15, categoria: 'Juguetes', referencia: 'G901' },
  { id: 8, nombre: 'Producto H', valorUnitario: 75.0, valorVenta: 80.0, cantidad: 60, categoria: 'Electrónica', referencia: 'H234' },
  { id: 9, nombre: 'Producto I', valorUnitario: 90.0, valorVenta: 100.0, cantidad: 35, categoria: 'Electrodomésticos', referencia: 'I567' },
  { id: 10, nombre: 'Producto J', valorUnitario: 45.0, valorVenta: 50.0, cantidad: 12, categoria: 'Ropa', referencia: 'J890' },
  { id: 11, nombre: 'Producto K', valorUnitario: 25.0, valorVenta: 30.0, cantidad: 5, categoria: 'Juguetes', referencia: 'K123' },
  { id: 12, nombre: 'Producto L', valorUnitario: 70.0, valorVenta: 75.0, cantidad: 8, categoria: 'Deportes', referencia: 'L456' },
  { id: 13, nombre: 'Producto I', valorUnitario: 90.0, valorVenta: 100.0, cantidad: 35, categoria: 'Electrodomésticos', referencia: 'I567' },
  { id: 14, nombre: 'Producto J', valorUnitario: 45.0, valorVenta: 50.0, cantidad: 12, categoria: 'Ropa', referencia: 'J890' },
  { id: 15, nombre: 'Producto K', valorUnitario: 25.0, valorVenta: 30.0, cantidad: 5, categoria: 'Juguetes', referencia: 'K123' },
  { id: 16, nombre: 'Producto L', valorUnitario: 70.0, valorVenta: 75.0, cantidad: 8, categoria: 'Deportes', referencia: 'L456' }
];
