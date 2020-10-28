import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule  } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule
  ],
  declarations: [
    ModalConfirmComponent
  ],
  entryComponents: [
    ModalConfirmComponent
  ],
  providers: []
})
export class CommonComponentsModule { }
