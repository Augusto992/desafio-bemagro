import { Component, OnInit } from '@angular/core';

import { IWeather } from '../shared/interfaces';
import { DataService } from '../core/data.service';


@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrl: './info-display.component.css'
})
export class InfoDisplayComponent implements OnInit {
  weatherDetails!: IWeather;
  showWeather: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  SearchWeather(city: string) {
    if(city) {
      console.log(city)
      this.dataService.getWeatherInfo(city)
        .subscribe((weather: IWeather) => this.weatherDetails = weather);
      this.showWeather = true;
    } else {
      this.showWeather = false;
    }
  }

}
