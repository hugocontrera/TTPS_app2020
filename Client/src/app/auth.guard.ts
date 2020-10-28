import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AlertService } from 'src/services/alert.service';
import { ModalService } from 'src/services/modal.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
  urlPath: string;
  continue: boolean;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private alertService: AlertService, private router: Router,
              private modalService: ModalService) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.continue = false;
    const token = this.storage.get('jwt');


    if ((token === undefined) && !environment.withoutAuthorizationUrls.includes(this.urlPath)) {
      this.modalService.closeAll();
      localStorage.clear();
      this.router.navigate(['home']);
    }

    if (!environment.withoutAuthorizationUrls.includes(this.urlPath)) {
      this.validatePermission(route.routeConfig.data.allow);
    }

    this.saveCurrentUrl();

    if (token !== undefined) {
      return true;
    }
  }

  saveCurrentUrl() {
    this.storage.set('currentUrl', this.urlPath);
  }

  validatePermission(allow: string) {
    const mode = this.storage.get('MODE');

    if (allow !== mode) {
      this.alertService.error('Tu usuario no tiene los permisos suficientes para ingresar a este lugar');
      this.router.navigate([this.router.url]);
    }
  }
}
