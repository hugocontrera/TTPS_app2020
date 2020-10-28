import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/services/login.service';
import { AlertService } from 'src/services/alert.service';
import { LoginResponse } from 'src/model/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  token: string;
  invalidLogin: boolean;

  constructor(private sessionService: SessionService, private router: Router,
              private loginService: LoginService, private spinner: NgxSpinnerService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.sessionService.currentToken.subscribe(token => this.token = token);
  }

  login(form: NgForm) {
    this.spinner.show();
    this.loginService.login(form.value.username, form.value.password).subscribe(
      response => {
        this.spinner.hide();
        this.saveTokenAndUser(response);
      },
      errorResponse => {
        this.spinner.hide();
        this.invalidLogin = true;
        this.errorMessage = 'E-mail o contraseña inválido';
      });
  }


  saveTokenAndUser(response: LoginResponse) {
    this.invalidLogin = false;
    this.sessionService.clearLocalStorage();
    this.sessionService.setToken(response.token);

    this.router.navigate(['home']);
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
