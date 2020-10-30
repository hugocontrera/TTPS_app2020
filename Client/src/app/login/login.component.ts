import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  loginForm:FormGroup;
  constructor(private sessionService: SessionService, private router: Router, private fb: FormBuilder,
              private loginService: LoginService, private spinner: NgxSpinnerService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.sessionService.currentToken.subscribe(token => this.token = token);
  }
  get username (){
    return this.loginForm.get('username');
  }
  get password (){
    return this.loginForm.get('password');
  }

  login() {
    this.spinner.show();
    this.loginService.login(this.username.value, this.password.value).subscribe(
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
