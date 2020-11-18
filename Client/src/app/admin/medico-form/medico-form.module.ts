import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoFormRoutingModule } from './medico-form-routing.module';
import { FormComponent } from './form/form.component';
import { MedicoNuevoComponent } from './medico-nuevo/medico-nuevo.component';
import { MedicoEditarComponent } from './medico-editar/medico-editar.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    FormComponent, 
    MedicoNuevoComponent, 
    MedicoEditarComponent, IndexComponent
  ],
  imports: [
    CommonModule,
    MedicoFormRoutingModule
  ]
})
export class MedicoFormModule { }
