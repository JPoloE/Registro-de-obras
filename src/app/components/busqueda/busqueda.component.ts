import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { BtnDetallesComponent } from '../btn-detalles/btn-detalles.component';
import { Projects } from '../interfaces/projects';
import { ProyectserviceService } from '../service/proyectservice.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  rowData: Projects[] = [];
  originalRowData: Projects[] = []; // Variable para almacenar los datos originales sin filtrar
  gridOptions: GridOptions;
  searchText: string = '';
  searchByClient: boolean = false;
  dynamicColDefs: ColDef[] = [];

  frameworkComponents = {
    btnDetallesRenderer: BtnDetallesComponent
  };

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  constructor(private dialog: MatDialog, private projectsService: ProyectserviceService) {
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api?.sizeColumnsToFit();
      }
    };
  }

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe({
      next: (rowData: Projects[]) => {
        this.rowData = rowData;
        this.originalRowData = rowData; // Almacenar los datos originales sin filtrar
        console.log(rowData);
      },
      error: (response) => {
        console.log(response);
      }
    });

    this.setDynamicColDefs(); // Establecer los colDefs iniciales
  }

  buscar(): void {
    if (this.searchText) {
      if (this.searchByClient) {
        this.rowData = this.originalRowData.filter(project =>
          project.clientName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        this.rowData = this.originalRowData.filter(project =>
          project.projectName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    } else {
      this.rowData = this.originalRowData; // Mostrar los datos originales sin filtrar
    }
    this.gridOptions.api?.setRowData(this.rowData); // Actualizar los datos en la tabla
    this.gridOptions.api?.sizeColumnsToFit(); // Ajustar el tamaño de las columnas al contenido
  }

  toggleSearchByClient(): void {
    this.searchByClient = !this.searchByClient;
    this.setDynamicColDefs(); // Actualizar los colDefs según el modo de búsqueda
    this.resetSearch(); // Restablecer la búsqueda al cambiar el modo de búsqueda
  }

  resetSearch(): void {
    this.searchText = '';
    this.buscar(); // Realizar una nueva búsqueda para restablecer los datos de la tabla
  }

  private setDynamicColDefs(): void {
    this.dynamicColDefs = [
      { field: 'projectName', headerName: 'Nombre de obra', hide: this.searchByClient },
      { field: 'city', headerName: 'Ciudad', hide: this.searchByClient },
      { field: 'residenceType', headerName: 'Tipo de residencia', hide: this.searchByClient },
      { field: 'locality', headerName: 'Localidad 1', hide: this.searchByClient },
      { field: 'locality2', headerName: 'Localidad 2', hide: this.searchByClient },
      { field: 'address', headerName: 'Direccion', hide: this.searchByClient },
      { field: 'clientName', headerName: 'Nombre del cliente', hide: !this.searchByClient },
      { field: 'clientTelephone', headerName: 'Telefono', hide: !this.searchByClient },
      { field: 'clientEmail', headerName: 'Correo', hide: !this.searchByClient },
      { field: '', width: 95, resizable: false, cellRenderer: 'btnDetallesRenderer' }
    ];
  }
}
