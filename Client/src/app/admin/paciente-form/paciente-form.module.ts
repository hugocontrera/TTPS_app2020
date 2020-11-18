import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteFormRoutingModule } from './paciente-form-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { PacienteNuevoComponent } from './paciente-nuevo/paciente-nuevo.component';
import { PacienteEditarComponent } from './paciente-editar/paciente-editar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, FormComponent, PacienteNuevoComponent, PacienteEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    PacienteFormRoutingModule
  ]
})
export class PacienteFormModule { }
