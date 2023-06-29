import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DetallesComponent } from '../detalles/detalles.component';
import { ProyectserviceService } from '../service/proyectservice.service';

@Component({
  selector: 'app-btn-detalles',
  template: `<p>
    <button (click)="openDialog()" class="nuevo" mat-icon-button color="primary"><mat-icon>searched</mat-icon></button>
  </p>`,
  styles: []
})
export class BtnDetallesComponent implements OnInit, ICellRendererAngularComp {
  value: any;

  constructor(public dialog: MatDialog, private proyectService: ProyectserviceService) { }

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.data.projectId;
  }

  ngOnInit(): void { }

  openDialog(): void {
    this.proyectService.getProject(this.value).subscribe(project => { 
      console.log('Project:', project);
      const dialogRef = this.dialog.open(DetallesComponent, {
        data: project
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    });
  }

  refresh(): boolean {
    return false;
  }
}
