import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  getWeatherByCity(city){
    this.apiService.getWheathrByCity(city).subscribe((data: any) => {
      this.apiService.weatherData = data ;
     });
    }

}
