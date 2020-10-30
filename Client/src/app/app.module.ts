import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { UiModule } from './ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { CommonComponentsModule } from './common/common-components.module';

// Librerias externas
import { NgxSpinnerModule } from 'ngx-spinner';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { getSpanishPaginatorIntl } from './common/spanish-paginator';

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
     AppRoutingModule,
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     CommonComponentsModule,
     UiModule,
     CommonModule,
     StorageServiceModule,
     NgxSpinnerModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     BrowserModule,
     MatToolbarModule,
     MatDialogModule,
     MatDividerModule,
     MatFormFieldModule,
     MatSnackBarModule,
     MatInputModule,
     JwtModule.forRoot({
       config: {
         tokenGetter
       }
     }),
   ],
 providers: [AuthGuard, DatePipe,
   {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptor,
     multi: true
   },
  //  { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }
 ],
 bootstrap: [AppComponent],
 entryComponents: []
})
export class AppModule { }
