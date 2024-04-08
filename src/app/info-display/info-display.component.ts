import { Component, OnInit } from '@angular/core';

import { ICityDetails, IWeather } from '../shared/interfaces';
import { DataService } from '../core/data.service';


@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrl: './info-display.component.css'
})
export class InfoDisplayComponent implements OnInit {
  weatherDetails!: IWeather;
  cityDetails!: ICityDetails[];
  cityName!: string;
  showWeather: boolean = false;
  isLoading: boolean = false;
  showError: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }
  SearchWeather(cityName: string) {
    if(cityName) {
      this.showError = false;
      this.isLoading = true;
      this.showWeather = false;
      this.dataService.getLatLong(cityName)
        .subscribe((city: ICityDetails[]) => {
          if(city && city.length > 0) {
            this.cityName = cityName;
            this.getWeatherDetails(city[0].lat, city[0].lon);
          } else {
            this.showError = true;
            this.isLoading = false;
          }
        });
    } else {
      this.showWeather = false;
    }
  }

  private getWeatherDetails(lat: string, lon: string) {
    this.dataService.getWeatherInfo(lat, lon)
      .subscribe((weather: IWeather) => {
        this.weatherDetails = weather;
        this.isLoading = false;
        this.showWeather = true;
      
      })
  }

}
