import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { email, form, required, submit } from '@angular/forms/signals';
import { text } from 'stream/consumers';

@Component({
  imports: [ ReactiveFormsModule ],
  selector: 'app-client-clinica',
  styleUrl: './client-clinica.css',
  templateUrl: './client-clinica.html',
})
export class ClientClinica {
  
  clientForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    nombreMascota: new FormControl(''),
    especie: new FormControl(''),
    sexo: new FormControl(''),
    raza: new FormControl(''),
    edad: new FormControl(''),
    peso: new FormControl(''),
    numeroMicrochip: new FormControl(''),
    contraseña: new FormControl(''),
    motivoVisita: new FormControl(''),
    aceptaPolitica: new FormControl(''),
    resbirRecordatorios: new FormControl(''),
  });

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.clientForm)
  }


}
