import { Component, OnInit } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DataService } from '../../core/data.service';
import { IWeather } from '../../shared/interfaces';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatIconModule ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit {
  weatherDetails!: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWeatherInfo('Nova Iorque')
      .subscribe((weather: IWeather) => this.weatherDetails = weather);
  }

}
