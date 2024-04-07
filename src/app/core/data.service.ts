import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { ICityDetails, IWeather } from '../../app/shared/interfaces';


@Injectable()
export class DataService {
  nominatimUrl: string =  'https://nominatim.openstreetmap.org/search?format=json&q=';
  weatherMapUrl: string = 'https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=9d3af2b9a21e18f86558b9b400c6986f';

  constructor(private http: HttpClient) { }
  
  getWeatherInfo(city: string): Observable<IWeather> {
    /*return this.getLatLong(city).pipe(
      mergeMap((cityDetails) => this.http.get<IWeather>(this.weatherMapUrl + `&lat=${cityDetails[0].lat}&lon=${cityDetails[0].lon}`))
      ).pipe(
        catchError(this.handleError)
      );*/
      return this.http.get<IWeather>('assets/weather.json');
  }

  private getLatLong(city: string) : Observable<ICityDetails[]> {
    return this.http.get<ICityDetails[]>(this.nominatimUrl + city)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
