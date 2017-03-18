import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";
//import {SimpleNotificationsModule} from "angular2-notifications";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot() // Bootstrap theme
   // SimpleNotificationsModule // Notification Toast
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
