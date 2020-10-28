import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class AlertService {
    constructor(private snackBar: MatSnackBar) {
    }

    private configSuccess: MatSnackBarConfig = {
        panelClass: ['style-succes'],
        duration: 6000
    };

    private configError: MatSnackBarConfig = {
        panelClass: ['style-error'],
        duration: 6000
    };

    private configWarning: MatSnackBarConfig = {
        panelClass: ['style-warning'],
        duration: 6000
    };

    private configInfo: MatSnackBarConfig = {
        panelClass: ['style-info'],
        duration: 6000
    };

    public success(message: string) {
        this.snackBar.open(message, '', this.configSuccess);
    }

    public error(message: string) {
        this.snackBar.open(message, '', this.configError);
    }

    public warning(message: string) {
        this.snackBar.open(message, '', this.configWarning);
    }

    public info(message: string) {
        this.snackBar.open(message, '', this.configInfo);
    }
}