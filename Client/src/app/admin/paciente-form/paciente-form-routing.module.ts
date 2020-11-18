import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PacienteEditarComponent } from './paciente-editar/paciente-editar.component';
import { PacienteNuevoComponent } from './paciente-nuevo/paciente-nuevo.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nuevo', pathMatch: 'full', component: PacienteNuevoComponent },
  { path: ':id/editar', component: PacienteEditarComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteFormRoutingModule { }
