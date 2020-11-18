import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.css']
})
export class MenuLayoutComponent implements OnInit {
  spinnerMessage: string;
  _opened = true;


  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  onActivate(componentReference) {
    this.spinnerMessage = componentReference.hasOwnProperty('spinnerMessage') ? componentReference.spinnerMessage : 'Cargando...';
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  logOut(){
    this.sessionService.clearLocalStorage();
    this.router.navigate(['login']);
  }

}
