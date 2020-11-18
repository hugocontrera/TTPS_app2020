import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MedicoEditarComponent } from './medico-editar/medico-editar.component';
import { MedicoNuevoComponent } from './medico-nuevo/medico-nuevo.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nuevo', pathMatch: 'full', component: MedicoNuevoComponent },
  { path: ':id/editar', component: MedicoEditarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoFormRoutingModule { }
