import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/model/loginResponse';
import { Login } from 'src/model/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(email, password): Observable<LoginResponse> {
    const body = { email: email, password: password };
    return this.http.post<LoginResponse>(environment.userServer + environment.loginUrl, body);
  }
}
