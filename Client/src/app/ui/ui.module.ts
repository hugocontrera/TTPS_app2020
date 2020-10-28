import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgxSpinnerModule } from 'ngx-spinner';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavIconsComponent } from './side-nav-icons/side-nav-icons.component';
import { AlertService } from 'src/services/alert.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    SidebarModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [
    MenuLayoutComponent,
    SimpleLayoutComponent,
    SideNavComponent,
    SideNavIconsComponent
  ],
  providers: [
    AlertService
  ],
  exports: [
    MenuLayoutComponent,
    SimpleLayoutComponent
  ]
})
export class UiModule { }
