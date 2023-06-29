import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarcontactoComponent } from '../agregarcontacto/agregarcontacto.component';
import { ColDef } from 'ag-grid-community';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectserviceService } from '../service/proyectservice.service';

@Component({
  selector: 'app-detalles-clientes',
  templateUrl: './detalles-clientes.component.html',
  styleUrls: ['./detalles-clientes.component.scss']
})
export class DetallesClientesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AgregarcontactoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    

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
