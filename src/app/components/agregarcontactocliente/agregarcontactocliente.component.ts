import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactsDTO } from '../interfaces/contactsDTO';
import { Projects } from '../interfaces/projects';
import { ProyectserviceService } from '../service/proyectservice.service';

@Component({
  selector: 'app-agregarcontactocliente',
  templateUrl: './agregarcontactocliente.component.html',
  styleUrls: ['./agregarcontactocliente.component.scss']
})
export class AgregarcontactoclienteComponent implements OnInit {labelPosition: 'Activo' | 'Inactivo' = 'Activo';
nombreInputValue: string = '';
telefonoInputValue: number = 0;
correoInputValue: string = '';
cargoInputValue: string = '';
observacionesInputValue: string = '';
inputValues: ContactsDTO = {} as ContactsDTO;

proyecto: Projects ;

constructor(
  private contactService: ProyectserviceService,  
  @Inject(MAT_DIALOG_DATA) public data: any
) { 
  this.proyecto = data;
}

ngOnInit(): void {
}

guardarContacto(): void {
  this.inputValues = {
    parentId: this.data.clientId,
    name: this.nombreInputValue,
    isActive: this.labelPosition === 'Activo',
    telephone: this.telefonoInputValue,
    position: this.cargoInputValue,
    email: this.correoInputValue,
    comments: this.observacionesInputValue
  };

  this.contactService.addContact(this.inputValues).subscribe(
    (response: ContactsDTO) => {
      console.log('Contacto guardado:', response);
      console.log(this.inputValues);
      // Aquí puedes realizar alguna acción adicional después de guardar el contacto
    },
    (error: any) => {
      console.error('Error al guardar contacto:', error);
      // Aquí puedes manejar el error de alguna forma
    }
  );
}

}
