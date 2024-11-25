import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'codigo', 'cantidad', 'precio', 'descuento', 'categoria'];
  dataSource = new MatTableDataSource(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // Vincula el paginador con el dataSource
    this.dataSource.paginator = this.paginator;
  }
}
const PRODUCTS = [
  { id: 1, codigo: 'A123', cantidad: 50, precio: 25.5, descuento: 10, categoria: 'Bebidas' },
  { id: 2, codigo: 'B456', cantidad: 20, precio: 15.0, descuento: 5, categoria: 'Snacks' },
  { id: 3, codigo: 'C789', cantidad: 30, precio: 40.0, descuento: 20, categoria: 'Electrónica' },
  { id: 4, codigo: 'D012', cantidad: 40, precio: 60.0, descuento: 15, categoria: 'Hogar' },
  { id: 5, codigo: 'E345', cantidad: 25, precio: 35.0, descuento: 10, categoria: 'Ropa' },
  { id: 6, codigo: 'F678', cantidad: 10, precio: 50.0, descuento: 5, categoria: 'Deportes' },
  { id: 7, codigo: 'G901', cantidad: 15, precio: 20.0, descuento: 0, categoria: 'Juguetes' },
  { id: 8, codigo: 'H234', cantidad: 60, precio: 75.0, descuento: 25, categoria: 'Electrónica' },
  { id: 9, codigo: 'I567', cantidad: 35, precio: 90.0, descuento: 30, categoria: 'Electrodomésticos' },
  { id: 10, codigo: 'J890', cantidad: 12, precio: 45.0, descuento: 10, categoria: 'Ropa' },
  { id: 11, codigo: 'K123', cantidad: 5, precio: 25.0, descuento: 5, categoria: 'Juguetes' },
  { id: 12, codigo: 'L456', cantidad: 8, precio: 70.0, descuento: 15, categoria: 'Deportes' },
  { id: 13, codigo: 'I567', cantidad: 35, precio: 90.0, descuento: 30, categoria: 'Electrodomésticos' },
  { id: 14, codigo: 'J890', cantidad: 12, precio: 45.0, descuento: 10, categoria: 'Ropa' },
  { id: 15, codigo: 'K123', cantidad: 5, precio: 25.0, descuento: 5, categoria: 'Juguetes' },
  { id: 16, codigo: 'L456', cantidad: 8, precio: 70.0, descuento: 15, categoria: 'Deportes' }
];
