import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
'referemcia'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id_factura',
    'cliente_documento',
    'cliente_nombre',
    'empleado_id',
    'fecha',
    'valortotal',
  ];
  dataSource = new MatTableDataSource(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchTerm = filter.trim().toLowerCase();

      return (
        data.id_factura.toString().includes(searchTerm) ||
        data.cliente_documento.toString().includes(searchTerm) ||
        data.cliente_nombre.toLowerCase().includes(searchTerm) ||
        data.empleado_id.toLowerCase().includes(searchTerm) ||
        data.fecha.toLowerCase().includes(searchTerm) ||
        data.valortotal.toString().includes(searchTerm) 
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
  { id_factura: '1', cliente_documento: '123456789', cliente_nombre: 'Juan Pérez',   empleado_id: 'E001', fecha: '2023-11-27', valortotal: 1275.0 },
  { id_factura: '2', cliente_documento: '987654321', cliente_nombre: 'María López',  empleado_id: 'E002', fecha: '2023-11-26', valortotal: 300.0  },
  { id_factura: '3', cliente_documento: '456123789', cliente_nombre: 'Carlos Gómez', empleado_id: 'E003', fecha: '2023-11-25', valortotal: 1200.0 },
  { id_factura: '4', cliente_documento: '741852963', cliente_nombre: 'Ana Torres',   empleado_id: 'E004', fecha: '2023-11-24', valortotal: 2400.0 },
  { id_factura: '5', cliente_documento: '852963741', cliente_nombre: 'Luis Ramírez', empleado_id: 'E005', fecha: '2023-11-23', valortotal: 875.0  }
];