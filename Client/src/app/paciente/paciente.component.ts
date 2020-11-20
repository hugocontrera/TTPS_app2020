import { Component } from '@angular/core';

import { Paciente } from '../../model/paciente';
import { FormsModule } from '@angular/forms';
import { NodeWithI18n } from '@angular/compiler';
import { PacienteService } from 'src/services/paciente.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/services/alert.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  title: 'Crud de Paciente'
  pacienteArray: Paciente[] = [
    { key: '1', dni: 34334036, nombre: 'Hugo', apellido: 'Contrera', domicilio: 'calle 50', fechaNacimiento: new Date(), contacto: 'un contacto', fechaInicioSintomas: new Date(), antecedentesPersonales: 'un String', obraSocial: 'IOMA', mail: 'hugo@gmail.com', fechaDiagnostico: new Date(), descripcion: 'una descripcion' },
    { key: '2', dni: 34334036, nombre: 'Juan', apellido: 'Perez', domicilio: 'calle 501', fechaNacimiento: new Date(), contacto: 'un contacto1', fechaInicioSintomas: new Date(), antecedentesPersonales: 'un String1', obraSocial: 'IOMA', mail: 'hugo@gmail.com', fechaDiagnostico: new Date(), descripcion: 'una descripcion1' },
    { key: '3', dni: 34334036, nombre: 'Pedro', apellido: 'Coronel', domicilio: 'calle 502', fechaNacimiento: new Date(), contacto: 'un contacto2', fechaInicioSintomas: new Date(), antecedentesPersonales: 'un String2', obraSocial: 'IOMA', mail: 'hugo@gmail.com', fechaDiagnostico: new Date(), descripcion: 'una descripcion2' }
  ]
  pacientes: any;
  selectedPaciente: Paciente = new Paciente();

  constructor(private pacienteService: PacienteService, private alertService: AlertService) {
}

  addOrEdit(): void {
    if (this.selectedPaciente.key === '0'){
      this.selectedPaciente.key = this.pacienteArray.length + '1';
      this.pacienteArray.push(this.selectedPaciente);

    }

    
    this.selectedPaciente = new Paciente();
  }

  openForEdit(paciente: Paciente): void {
    this.selectedPaciente = paciente;
  }

  delete(): void{
    if (confirm('Estas seguro que deseas eliminar el paciente')){
      this.pacienteArray = this.pacienteArray.filter(x=> x !== this.selectedPaciente);
      this.selectedPaciente = new Paciente();

    }
    
  }

  getPacientes(): void{
    this.pacienteService.getPacientes().subscribe( //para hacer consultas asincronicas
      response => {      //si es verdadero viene la lista de pacientes 
        this.pacientes = response
      },
      errorResponse => {   //si no tira mensaje de error error
        this.alertService.error('error al obtener pacientes');
      });
    }
    
  }



