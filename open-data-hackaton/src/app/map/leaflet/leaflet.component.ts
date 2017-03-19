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
    /*
    let LeafIcon = L.Icon.extend({
      options: {
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }
    });

    let greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'});

    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(this.map).bindPopup("I am a green leaf.");*/

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 5,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  ngOnDestroy() { }
}
