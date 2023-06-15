import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DetallesComponent } from '../detalles/detalles.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-btn-detalles',
  template: `<p>
   <button (click)="openDialog()" class="nuevo" mat-raised-button color="primary">Ver</button>{{value}}
  </p>`,
  styles: [

  ]
})
export class BtnDetallesComponent implements OnInit, ICellRendererAngularComp {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DetallesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  value: any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
