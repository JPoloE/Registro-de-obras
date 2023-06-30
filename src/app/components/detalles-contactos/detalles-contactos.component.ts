import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalles-contactos',
  templateUrl: './detalles-contactos.component.html',
  styleUrls: ['./detalles-contactos.component.scss']
})
export class DetallesContactosComponent implements OnInit {
  rowData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.rowData = this.data;
  }
}