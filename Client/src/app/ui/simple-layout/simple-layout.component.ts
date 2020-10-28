import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.css']
})
export class SimpleLayoutComponent implements OnInit {
  spinnerMessage: string;


  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  onActivate(componentReference) {
    this.spinnerMessage = componentReference.hasOwnProperty('spinnerMessage') ? componentReference.spinnerMessage : 'Cargando...';
  }

  logOut() {
    this.sessionService.clearLocalStorage();
    this.router.navigate(['home']);
  }

}
