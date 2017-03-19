import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';

@Component({
  selector: 'map-leaflet',
  template: `<sebm-google-map [latitude]="lat" [longitude]="lng"></sebm-google-map>`,
  styleUrls: ['leaflet.component.css']
})
export class LeafletComponent  {

  lat: number = 51.678418;
  lng: number = 7.809007;

}
