import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'pedido_id',
    'producto_id',
    'fecha',
    'nombre',
    'cantidad',
    'valorUnitario',
    'valorVenta',
  ];
  dataSource = new MatTableDataSource(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchTerm = filter.trim().toLowerCase();

      return (
        data.pedido_id.toString().toLowerCase().includes(searchTerm) ||
        data.producto_id.toLowerCase().includes(searchTerm) ||
        data.fecha.toLowerCase().includes(searchTerm) ||
        data.nombre.toLowerCase().includes(searchTerm) ||
        data.cantidad.toString().toLowerCase().includes(searchTerm) ||
        data.valorUnitario.toString().toLowerCase().includes(searchTerm) ||
        data.valorVenta.toString().toLowerCase().includes(searchTerm)
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
  { pedido_id: 'P001', producto_id: 'PR001', fecha: '2023-11-27', nombre: 'Producto A', cantidad: 10, valorUnitario: 50.0, valorVenta: 500.0 },
  { pedido_id: 'P002', producto_id: 'PR002', fecha: '2023-11-26', nombre: 'Producto B', cantidad: 5,  valorUnitario: 30.0, valorVenta: 150.0 },
  { pedido_id: 'P003', producto_id: 'PR003', fecha: '2023-11-25', nombre: 'Producto C', cantidad: 8,  valorUnitario: 20.0, valorVenta: 160.0 },
  { pedido_id: 'P004', producto_id: 'PR004', fecha: '2023-11-24', nombre: 'Producto D', cantidad: 15, valorUnitario: 25.0, valorVenta: 375.0 },
  { pedido_id: 'P005', producto_id: 'PR005', fecha: '2023-11-23', nombre: 'Producto E', cantidad: 12, valorUnitario: 40.0, valorVenta: 480.0 }
];
