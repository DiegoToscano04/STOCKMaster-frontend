import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
'referemcia'
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'idProducto', 'cantidad','precioUnitario','valorTotal'];
  dataSource = new MatTableDataSource(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
  }
}
const PRODUCTS = [
  { id: 1, idProducto: 'A123', cantidad: 50, precioUnitario: 25.5, valorTotal: 50 * 25.5 },
  { id: 2, idProducto: 'B456', cantidad: 20, precioUnitario: 15.0, valorTotal: 20 * 15.0 },
  { id: 3, idProducto: 'C789', cantidad: 30, precioUnitario: 40.0, valorTotal: 30 * 40.0 },
  { id: 4, idProducto: 'D012', cantidad: 40, precioUnitario: 60.0, valorTotal: 40 * 60.0 },
  { id: 5, idProducto: 'E345', cantidad: 25, precioUnitario: 35.0, valorTotal: 25 * 35.0 }
];