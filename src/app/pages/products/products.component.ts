import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id_producto',
    'nombre',
    'tipo',
    'valorUnitario',
    'valorVenta',
    'cantidadTotal',
    'referencia',
  ];
  dataSource = new MatTableDataSource(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchTerm = filter.trim().toLowerCase();

      return (
        data.id_producto.toString().includes(searchTerm) ||
        data.nombre.toLowerCase().includes(searchTerm) ||
        data.tipo.toLowerCase().includes(searchTerm) ||
        data.valorUnitario.toString().includes(searchTerm) ||
        data.valorVenta.toString().includes(searchTerm) ||
        data.cantidadTotal.toString().includes(searchTerm) ||
        data.referencia.toLowerCase().includes(searchTerm)
      );
    };
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

const PRODUCTS = [
  { id_producto: 1, nombre: 'Producto A', valorUnitario: 25.5, valorVenta: 30.0, cantidadTotal: 50, tipo: 'Bebidas', referencia: 'A123' },
  { id_producto: 2, nombre: 'Producto B', valorUnitario: 15.0, valorVenta: 20.0, cantidadTotal: 20, tipo: 'Snacks', referencia: 'B456' },
  { id_producto: 3, nombre: 'Producto C', valorUnitario: 40.0, valorVenta: 45.0, cantidadTotal: 30, tipo: 'Electrónica', referencia: 'C789' },
  { id_producto: 4, nombre: 'Producto D', valorUnitario: 60.0, valorVenta: 70.0, cantidadTotal: 40, tipo: 'Hogar', referencia: 'D012' },
  { id_producto: 5, nombre: 'Producto E', valorUnitario: 35.0, valorVenta: 40.0, cantidadTotal: 25, tipo: 'Ropa', referencia: 'E345' },
  { id_producto: 6, nombre: 'Producto F', valorUnitario: 50.0, valorVenta: 55.0, cantidadTotal: 10, tipo: 'Deportes', referencia: 'F678' },
  { id_producto: 7, nombre: 'Producto G', valorUnitario: 20.0, valorVenta: 25.0, cantidadTotal: 15, tipo: 'Juguetes', referencia: 'G901' },
  { id_producto: 8, nombre: 'Producto H', valorUnitario: 75.0, valorVenta: 80.0, cantidadTotal: 60, tipo: 'Electrónica', referencia: 'H234' },
  { id_producto: 9, nombre: 'Producto I', valorUnitario: 90.0, valorVenta: 100.0, cantidadTotal: 35, tipo: 'Electrodomésticos', referencia: 'I567' },
  { id_producto: 10, nombre: 'Producto J', valorUnitario: 45.0, valorVenta: 50.0, cantidadTotal: 12, tipo: 'Ropa', referencia: 'J890' },
  { id_producto: 11, nombre: 'Producto K', valorUnitario: 25.0, valorVenta: 30.0, cantidadTotal: 5, tipo: 'Juguetes', referencia: 'K123' },
  { id_producto: 12, nombre: 'Producto L', valorUnitario: 70.0, valorVenta: 75.0, cantidadTotal: 8, tipo: 'Deportes', referencia: 'L456' },
  { id_producto: 13, nombre: 'Producto I', valorUnitario: 90.0, valorVenta: 100.0, cantidadTotal: 35, tipo: 'Electrodomésticos', referencia: 'I567' },
  { id_producto: 14, nombre: 'Producto J', valorUnitario: 45.0, valorVenta: 50.0, cantidadTotal: 12, tipo: 'Ropa', referencia: 'J890' },
  { id_producto: 15, nombre: 'Producto K', valorUnitario: 25.0, valorVenta: 30.0, cantidadTotal: 5, tipo: 'Juguetes', referencia: 'K123' },
  { id_producto: 16, nombre: 'Producto L', valorUnitario: 70.0, valorVenta: 75.0, cantidadTotal: 8, tipo: 'Deportes', referencia: 'L456' }
];
