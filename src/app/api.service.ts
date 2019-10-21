import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weatherData;

  constructor(private httpClient: HttpClient) { }

  getWheathr() {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=tunis,tn&appid=6a5af167ef697a9abb4a775e5684d9c5&units=metric');

  }

  getWheathrByCity(city = ' ') {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=6a5af167ef697a9abb4a775e5684d9c5&units=metric');

  }

}
