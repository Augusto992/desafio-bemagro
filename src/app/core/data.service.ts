import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { ICityDetails, IWeather } from '../../app/shared/interfaces';
import { ApiKey } from '../../../environment';


@Injectable()
export class DataService {
  nominatimUrl: string =  'https://nominatim.openstreetmap.org/search?format=json&q=';
  weatherMapUrl: string = `https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=${ApiKey}`;

  constructor(private http: HttpClient) { }
  getWeatherInfo(lat: string, lon: string): Observable<IWeather> {
    return this.http.get<IWeather>(this.weatherMapUrl + `&lat=${lat}&lon=${lon}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getLatLong(city: string) : Observable<ICityDetails[]> {
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
