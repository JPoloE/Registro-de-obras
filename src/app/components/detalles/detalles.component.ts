import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarcontactoComponent } from '../agregarcontacto/agregarcontacto.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(AgregarcontactoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

  rowData: any[] = [
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },


  ];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  }

  colDefs: ColDef[] = [
    { field: 'Cargo', width: 175 },
    { field: 'Nombre', width: 175 },
    { field: 'Telefono', width: 175 },
    { field: 'Correo', width: 175 },

  ]

}
