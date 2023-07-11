import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contacts } from '../interfaces/contacts';
import { ProyectserviceService } from '../service/proyectservice.service';
import { ContactsDTO } from '../interfaces/contactsDTO';

@Component({
  selector: 'app-detalles-contactos',
  templateUrl: './detalles-contactos.component.html',
  styleUrls: ['./detalles-contactos.component.scss']
})
export class DetallesContactosComponent implements OnInit {
  rowData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactService: ProyectserviceService
  ) { }

  ngOnInit(): void {
    this.rowData = this.data;
  }

  guardarCambios(): void {
    // Crea un objeto contactRequest con los datos actualizados
    const contactRequest: Contacts = {
      id: this.rowData.id,
      parentId: this.rowData.parentId,
      name: this.rowData.name,
      isActive: this.rowData.isActive,
      telephone: this.rowData.telephone,
      position: this.rowData.position,
      email: this.rowData.email,
      comments: this.rowData.comments
    };

    // Llama al servicio para guardar los cambios
    this.contactService.editContact(this.rowData.id, contactRequest).subscribe(
      (response: Contacts) => {
        console.log(response);
        console.log(contactRequest);
        // Aquí puedes realizar alguna acción adicional después de guardar los cambios
      },
      (error: any) => {
        console.error('Error al guardar cambios:', error);
        // Aquí puedes manejar el error de alguna forma
      }
    );
  }
}
