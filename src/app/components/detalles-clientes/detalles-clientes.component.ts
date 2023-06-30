import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AgregarcontactoComponent } from '../agregarcontacto/agregarcontacto.component';
import { ColDef } from 'ag-grid-community';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectserviceService } from '../service/proyectservice.service';
import { Projects } from '../interfaces/projects';
import { Contacts } from '../interfaces/contacts';
import { ObrasComponent } from '../obras/obras.component';
import { BtnDetallesComponent } from '../btn-detalles/btn-detalles.component';


interface FieldConfig {
  key: keyof Projects;
  label: string;
  placeholder: string;
}


@Component({
  selector: 'app-detalles-clientes',
  templateUrl: './detalles-clientes.component.html',
  styleUrls: ['./detalles-clientes.component.scss']
})
export class DetallesClientesComponent implements OnInit {

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

  rowData: Contacts[] = [];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };


  colDefs: ColDef[] = [
    { field: 'name', headerName:'Nombre', width: 175 },
    { field: 'isActive', headerName:'Estado', width: 175 },
    { field: 'telephone', headerName:'Telefono', width: 175 },
    { field: 'position',headerName:'Cargo', width: 175 },
    { field: 'email',headerName:'Correo' ,width: 175 },
    { field: 'coments',headerName:'Comentarios', width: 175 },
    
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarcontactoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openObrasModal(): void {
    this.projectService.getProjectsByUser(this.proyecto.clientId).subscribe(project => { 
      const dialogRef = this.dialog.open(ObrasComponent, {
        data: project
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    });
  }


ngOnInit(): void {
  console.log(this.proyecto.projectId);

  this.projectService.getContactsByUser(this.proyecto.clientId).subscribe({
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
