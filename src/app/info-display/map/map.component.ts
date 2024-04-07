import { Component, Input, AfterViewInit, SimpleChanges  } from '@angular/core';
import * as L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

//Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ LeafletModule ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
/*export class MapComponent {
  private _lat: number = 0;
  private _lon: number = 0; 
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


  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: this.lat, lng: this.lon }
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 28.625485, lng: 79.821091 },
        draggable: true
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    //this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  } 
}*/
export class MapComponent implements AfterViewInit {
  private map: any;
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
    this.map = L.map('map').setView([this.lat, this.lon], 13);

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
    const marker = L.marker(data.position, { draggable: data.draggable })
    marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
  }

  constructor() { }

  ngAfterViewInit(): void {
    console.log("Init");
    console.log("lat: ", this.lat, ", lon: ", this.lon);
    this.initMap();
    this.initMarker();
   }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changed");
    console.log("lat: ", changes['lat'].currentValue, ", lon: ", changes['lon'].currentValue);
    this.map.panTo({
      lat: changes['lat'].currentValue,
      lng: changes['lon'].currentValue
    });
  }
}
