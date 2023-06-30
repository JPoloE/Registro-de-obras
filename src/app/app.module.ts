import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { DetallesComponent } from './components/detalles/detalles.component';
import { AgregarcontactoComponent } from './components/agregarcontacto/agregarcontacto.component';
import { BtnDetallesComponent } from './components/btn-detalles/btn-detalles.component';
import { DetallesClientesComponent } from './components/detalles-clientes/detalles-clientes.component';
import { BtnClientesComponent } from './components/btn-clientes/btn-clientes.component';
import { ObrasComponent } from './components/obras/obras.component'
import {MatRadioModule} from '@angular/material/radio';
import { BtnContactosComponent } from './components/btn-contactos/btn-contactos.component';
import { DetallesContactosComponent } from './components/detalles-contactos/detalles-contactos.component';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    DetallesComponent,
    AgregarcontactoComponent,
    BtnDetallesComponent,
    DetallesClientesComponent,
    BtnClientesComponent,
    ObrasComponent,
    BtnContactosComponent,
    DetallesContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    AgGridModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
