import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgregarcontactoComponent } from '../agregarcontacto/agregarcontacto.component';
import { ColDef } from 'ag-grid-community';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectserviceService } from '../service/proyectservice.service';
import { Projects } from '../interfaces/projects';

interface FieldConfig {
  key: keyof Projects;
  label: string;
  placeholder: string;
}

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  
  proyecto: Projects;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private projectService: ProyectserviceService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.proyecto = data[0];
  }

  

  rowData: any[] = [
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' },
    { Cargo: 'Arquitecto', Nombre: 'Jesus Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com' }
  ];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  colDefs: ColDef[] = [
    { field: 'Cargo', width: 175 },
    { field: 'Nombre', width: 175 },
    { field: 'Telefono', width: 175 },
    { field: 'Correo', width: 175 }
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarcontactoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    console.log(this.proyecto);
  }
}
