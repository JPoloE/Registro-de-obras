import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ColDef } from 'ag-grid-community';
import { BtnDetallesComponent } from '../btn-detalles/btn-detalles.component';
import { Projects } from '../interfaces/projects';
import { ProyectserviceService } from '../service/proyectservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {


  constructor(private projetsService:ProyectserviceService){

  }



  rowData: Projects[] = []; 

  colDefs: ColDef[] = [

    { field: 'projectName', headerName: 'Project Name' },
    { field: 'city', headerName: 'City' },
    { field: 'residenceType', headerName: 'Residence Type' },
    { field: 'locality', headerName: 'Locality' },
    { field: 'locality2', headerName: 'Locality2' },
    { field: 'address', headerName: 'Address' },
    { field: 'clientTelephone', headerName: 'Telephone' },
    { field: '', width: 95, resizable: false, cellRenderer: BtnDetallesComponent }

  ]

  ngOnInit(): void {
    this.projetsService.getAllProjects().subscribe({
      next: (rowData:Projects[])=>{
        this.rowData = rowData
        console.log(rowData)
      },
      error:(response)=>{
        console.log(response)
      }
      
    })
  }

  

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  }

  

}
