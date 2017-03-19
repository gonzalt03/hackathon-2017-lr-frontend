import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {SimpleNotificationsModule} from "angular2-notifications";
import {AppHeaderComponent} from "./app-header/app-header.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import { LeafletComponent } from './map/leaflet/leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarHeaderComponent,
    FooterComponent
    AppComponent,
    LeafletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACeilyJdXFI3FVKPnxnOWgqQ9X_ZaE0uk'
    }),
    Ng2BootstrapModule.forRoot() // Bootstrap theme
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
