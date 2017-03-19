import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from "ng2-bootstrap";
import { LeafletComponent } from './map/leaflet/leaflet.component';
import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACeilyJdXFI3FVKPnxnOWgqQ9X_ZaE0uk'
    }),
    Ng2BootstrapModule.forRoot() // Bootstrap theme
   // SimpleNotificationsModule // Notification Toast
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
