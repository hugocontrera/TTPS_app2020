import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { IndexComponent } from './index/index.component';
import { EvolucionarPacienteComponent } from './evolucionar-paciente/evolucionar-paciente.component';


@NgModule({
  declarations: [
    IndexComponent,
    EvolucionarPacienteComponent,
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule { }
