import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigEditarComponent } from './config-editar/config-editar.component';
import { ConfigNuevoComponent } from './config-nuevo/config-nuevo.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nuevo', pathMatch: 'full', component: ConfigNuevoComponent },
  { path: ':id/editar', component: ConfigEditarComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigFormRoutingModule { }
