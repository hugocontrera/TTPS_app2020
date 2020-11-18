import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PacienteComponent } from './paciente/paciente.component'
import { MenuLayoutComponent } from './ui/menu-layout/menu-layout.component';

const routes: Routes = [
  {
    path: 'user',
    component: MenuLayoutComponent,
    children: [
      { path: 'paciente', component: PacienteComponent, canActivate: [AuthGuard], data: { allow: 'guardia'} },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { allow: 'guardia'} },
      { path: 'sinAcceso', component: HomeComponent, canActivate: [AuthGuard], data: { allow: 'jefe'} },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
