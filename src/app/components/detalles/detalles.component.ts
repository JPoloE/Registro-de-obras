import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgregarcontactoComponent } from '../agregarcontacto/agregarcontacto.component';
import { ColDef } from 'ag-grid-community';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectserviceService } from '../service/proyectservice.service';
import { Projects } from '../interfaces/projects';
import { Contacts } from '../interfaces/contacts';
import { DetallesContactosComponent } from '../detalles-contactos/detalles-contactos.component';
import { BtnContactosComponent } from '../btn-contactos/btn-contactos.component';

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

  countries: string[] = ['AFGANISTAN', 'COLOMBIA', 'PERU'];
 
  residenceTypes: string[] = ['URBANIZACIÓN', 'EDIFICIO', 'CASA', 'HOTEL','CENTRO COMERCIAL', 'LOCAL COMERCIAL'];

  rowData: Contacts[] = [];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  frameworkComponents = {
    btnContactosRenderer: BtnContactosComponent
  };

  colDefs: ColDef[] = [
    { field: 'name', headerName:'Nombre', width: 175 },
    { field: 'isActive', headerName:'Estado', width: 175 },
    { field: 'telephone', headerName:'Telefono', width: 175 },
    { field: 'position',headerName:'Cargo', width: 175 },
    { field: 'email',headerName:'Correo' ,width: 175 },
    { field: 'coments',headerName:'Comentarios', width: 175 },
    { field: '', width: 95, resizable: false, cellRenderer: 'btnContactosRenderer',cellRendererParams: {
      onClick: (data: any) => this.openModal(data)
    } },
  ];

  openModal(data: any): void {
    const dialogRef = this.dialog.open(DetallesContactosComponent, {
      data: data
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarcontactoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


ngOnInit(): void {
  console.log(this.proyecto.projectId);

  this.projectService.getContactsByProjec(this.proyecto.projectId).subscribe({
    next: (rowData: Contacts[]) => {
      console.log(rowData);
      this.rowData = rowData;
      console.log(rowData);
    },
    error: (response) => {
      console.log(response);
    }
  });
}
}
