import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import 'leaflet';

@Component({
  selector: 'map-leaflet',
  template: `<div #mapDiv class="leaflet-map"></div>`,
  styleUrls: ['leaflet.component.css']
})
export class LeafletComponent implements OnInit, OnDestroy {
  map: L.Map = null;

  @ViewChild('mapDiv') mapContainer;
  private id: string;

  constructor() {
    this.id = "map" + Date.now();
  }

  ngOnInit() {
    this.map = L.map(this.mapContainer.nativeElement).setView([51.5, -0.09], 13);

    //let testIcon = L.AwesomeMarkers.icon({icon: 'group', prefix: 'fa', markerColor: 'darkred'});

    //L.marker([51.5, -0.09], {icon: testIcon}).addTo(this.map).bindPopup("I am a awesome marker.");

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 5,
      detectRetina: true,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  ngOnDestroy() { }
}
