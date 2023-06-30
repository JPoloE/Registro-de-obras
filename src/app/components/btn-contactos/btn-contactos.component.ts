import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-btn-contactos',
  template: `<p>
    <button class="nuevo" mat-icon-button color="primary" (click)="onClick()"><mat-icon>searched</mat-icon></button>
  </p>`,
  styles: []
})
export class BtnContactosComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }
  ngOnInit(): void {
  }

  onClick(): void {
    const rowData = this.params.data;
    this.params.onClick(rowData);
    console.log(rowData);
  }

  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
