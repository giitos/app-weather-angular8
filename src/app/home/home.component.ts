import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherData;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getWheathr().subscribe((data: any) => {
      console.log(data);
      this.weatherData = data;
    });
  }

}
