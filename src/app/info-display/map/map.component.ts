import { Component, Input, AfterViewInit, SimpleChanges  } from '@angular/core';
import * as L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

L.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ LeafletModule ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private marker: any;
  private _lat!: number;
  private _lon!: number; 
  @Input() get lat(): number {
    return this._lat;
  }
  set lat(value: number) {
    this._lat = value;
  }

  @Input() get lon(): number {
    return this._lon;
  }
  set lon(value: number) {
    this._lon = value;
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.lat, this.lon], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  private initMarker(): void {
    const data = {
      position: { lat: this.lat, lng: this.lon },
      draggable: false
    };
    this.marker = L.marker(data.position, { draggable: data.draggable })
    this.marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.initMarker();
   }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.map.panTo({
      lat: changes['lat'].currentValue,
      lng: changes['lon'].currentValue
    });
    this.marker.panTo({
      lat: changes['lat'].currentValue,
      lng: changes['lon'].currentValue
    });
  }
}
