import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsDTO } from '../interfaces/contactsDTO';
import { Observable } from 'rxjs';
import { ProyectserviceService } from '../service/proyectservice.service';

@Component({
  selector: 'app-agregarcontacto',
  templateUrl: './agregarcontacto.component.html',
  styleUrls: ['./agregarcontacto.component.scss']
})
export class AgregarcontactoComponent implements OnInit {
  labelPosition: 'Activo' | 'Inactivo' = 'Activo';
  nombreInputValue: string = '';
  telefonoInputValue: number = 0;
  correoInputValue: string = '';
  cargoInputValue: string = '';
  observacionesInputValue: string = '';
  inputValues: ContactsDTO = {} as ContactsDTO;

  constructor(private contactService: ProyectserviceService) { }

  ngOnInit(): void {
  }

  guardarContacto(): void {
    this.inputValues = {
      parentId: 0,
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
