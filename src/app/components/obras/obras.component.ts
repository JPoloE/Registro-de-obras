import { Component, Inject, OnInit } from '@angular/core';
import { Projects } from '../interfaces/projects';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectserviceService } from '../service/proyectservice.service';
import { ColDef } from 'ag-grid-community';
import { BtnDetallesComponent } from '../btn-detalles/btn-detalles.component';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent implements OnInit {
  rowData: Projects[] = [];
  proyecto: Projects[];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private projectService: ProyectserviceService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.proyecto = data;
  }

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  frameworkComponents = {
    btnDetallesRenderer: BtnDetallesComponent
  };

  colDefs: ColDef[] = [
    { field: 'projectName', headerName: 'Nombre de obra', width:175 },
    { field: 'city', headerName: 'Ciudad', width:175 },
    { field: 'residenceType', headerName: 'Tipo de residencia', width:175 },
    { field: 'locality', headerName: 'Localidad 1', width:175 },
    { field: 'locality2', headerName: 'Localidad 2', width:175 },
    { field: 'address', headerName: 'Direccion', width:175 },
    { field: '', width: 95, resizable: false, cellRenderer: 'btnDetallesRenderer'},
    
  ];

  ngOnInit(): void {
    const projectsData = Object.values(this.proyecto); // Convertir los objetos en un array
    this.rowData = projectsData;
  }
}
