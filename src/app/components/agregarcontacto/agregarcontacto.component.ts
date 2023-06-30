import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agregarcontacto',
  templateUrl: './agregarcontacto.component.html',
  styleUrls: ['./agregarcontacto.component.scss']
})
export class AgregarcontactoComponent implements OnInit {


  checked = false;
  indeterminate = false;
  labelPosition: 'Activo' | 'Inactivo' = 'Activo';
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
