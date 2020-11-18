import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routesAdmin: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'medico',
    loadChildren: () => import('./medico-form/medico-form.module').then(m => m.MedicoFormModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente-form/paciente-form.module').then(m => m.PacienteFormModule)
  },
  {
    path: 'configurador',
    loadChildren: () => import('./config-form/config-form.module').then(m => m.ConfigFormModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
