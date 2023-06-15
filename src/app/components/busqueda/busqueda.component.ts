import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {


  ngOnInit(): void {
  }

  rowData: any[] = [
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Jesus David Polo', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },
    { Cliente: 'Andres Daniel', Telefono: 3024339697, Correo: 'jesus@gmail.com', Direccion: "Cr7 Call2A" },

  ];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true
  }

  colDefs: ColDef[] = [
    { field: 'Cliente', width: 290 },
    { field: 'Telefono', width: 290 },
    { field: 'Correo', width: 290 },
    { field: 'Direccion', width: 290 },
    { field: '', width: 120, resizable: false }

  ]

}
