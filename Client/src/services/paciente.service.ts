import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Paciente } from 'src/model/paciente';

//Este servicio es para traer pacietes del backend
@Injectable({
    providedIn: 'root'
})
export class PacienteService {

    constructor(private http: HttpClient) {

    }

    getPacientes(): Observable<Paciente> {

        return this.http.get<Paciente>(environment.userServer + environment.getPacientesUrl);
    }
}
