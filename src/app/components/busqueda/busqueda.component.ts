import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ColDef } from 'ag-grid-community';
import { BtnDetallesComponent } from '../btn-detalles/btn-detalles.component';
import { Projects } from '../interfaces/projects';
import { ProyectserviceService } from '../service/proyectservice.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallesComponent } from '../detalles/detalles.component';
import { GridOptions } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  rowData: Projects[] = []; 

  colDefs: ColDef[] = [
    { field: 'projectName', headerName: 'Project Name' },
    { field: 'city', headerName: 'City' },
    { field: 'residenceType', headerName: 'Residence Type' },
    { field: 'locality', headerName: 'Locality' },
    { field: 'locality2', headerName: 'Locality2' },
    { field: 'address', headerName: 'Address' },
    { field: 'clientTelephone', headerName: 'Telephone' },
    { field: '', width: 95, resizable: false, cellRenderer: 'btnDetallesRenderer' }
  ];

  frameworkComponents = {
    btnDetallesRenderer: BtnDetallesComponent
  };

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  constructor(private dialog: MatDialog, private projetsService: ProyectserviceService) { }

  ngOnInit(): void {
    this.projetsService.getAllProjects().subscribe({
      next: (rowData: Projects[]) => {
        this.rowData = rowData;
        console.log(rowData);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}