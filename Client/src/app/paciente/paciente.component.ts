import { Component } from '@angular/core';

import { Paciente } from '../../model/paciente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  title: "Crud de Paciente"
  pacienteArray: Paciente[] = [
    { id: 1, dni: 34334036, nombre: "Hugo", apellido: "Contrera", domicilio: "calle 50", f_nacimiento: "30 / 08 / 1998", contacto: "un contacto", f_ini_sintomas: "15 / 11 / 2020", antecedentes_personales: "un String", obra_social: "IOMA", mail: "hugo@gmail.com", f_diagnostico: "16 / 11 / 2020", descripcion: "una descripcion" },
    { id: 2, dni: 34334036, nombre: "Juan", apellido: "Perez", domicilio: "calle 501", f_nacimiento: "30 / 08 / 1998", contacto: "un contacto1", f_ini_sintomas: "15 / 11 / 2020", antecedentes_personales: "un String1", obra_social: "IOMA", mail: "hugo@gmail.com", f_diagnostico: "16 / 11 / 2020", descripcion: "una descripcion1" },
    { id: 3, dni: 34334036, nombre: "Pedro", apellido: "Coronel", domicilio: "calle 502", f_nacimiento: "30 / 08 / 1998", contacto: "un contacto2", f_ini_sintomas: "15 / 11 / 2020", antecedentes_personales: "un String2", obra_social: "IOMA", mail: "hugo@gmail.com", f_diagnostico: "16 / 11 / 2020", descripcion: "una descripcion2" }
  ]
  selectedPaciente: Paciente = new Paciente();

  addOrEdit() {
    if(this.selectedPaciente.id === 0){
      this.selectedPaciente.id = this.pacienteArray.length + 1;
      this.pacienteArray.push(this.selectedPaciente);

    }

    
    this.selectedPaciente = new Paciente();
  }

  openForEdit(paciente: Paciente) {
    this.selectedPaciente = paciente;
  }

  delete(){
    if(confirm('Estas seguro que deseas eliminar el paciente')){
      this.pacienteArray = this.pacienteArray.filter(x=> x != this.selectedPaciente);
      this.selectedPaciente = new Paciente();

    }
    
  }


}
