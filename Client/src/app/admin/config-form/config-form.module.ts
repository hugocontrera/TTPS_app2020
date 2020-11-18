import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigFormRoutingModule } from './config-form-routing.module';
import { IndexComponent } from './index/index.component';
import { ConfigNuevoComponent } from './config-nuevo/config-nuevo.component';
import { ConfigEditarComponent } from './config-editar/config-editar.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    IndexComponent, 
    ConfigNuevoComponent, 
    ConfigEditarComponent, FormComponent
  ],
  imports: [
    CommonModule,
    ConfigFormRoutingModule
  ]
})
export class ConfigFormModule { }
