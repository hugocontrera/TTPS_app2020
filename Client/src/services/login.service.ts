import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/model/loginResponse';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email: email, password: password };
    return this.http.post<LoginResponse>(environment.userServer + environment.loginUrl, body);
  }
}
