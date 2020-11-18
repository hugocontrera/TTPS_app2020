import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvolucionarPacienteComponent } from './evolucionar-paciente/evolucionar-paciente.component';
import { IndexComponent } from './index/index.component';

const routesMedico: Routes = [
  { path: '', component: IndexComponent },
  { path: 'evolucionar-paciente', component: EvolucionarPacienteComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routesMedico)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
