import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { WeatherMapService } from '../../services/weather-map.service';
import { ConsolidatedWeather } from '../../models/consolidated_weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherListComponent implements OnInit {
  public consolidatedWeatherList: ConsolidatedWeather[];
  public selected_city_name: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private weatherMapService: WeatherMapService) { }

  ngOnInit() {
    const woeid = this.route.snapshot.paramMap.get('woeid');
    console.log(woeid);
    const city_name = this.route.snapshot.paramMap.get('city_name');
    console.log(city_name);
    this.selected_city_name = city_name;
    this.weatherMapService.getCityConsolidatedWeather(woeid)
    .subscribe(d => this.consolidatedWeatherList = d);
  }

  GoBack() {
    const city_abbr = this.route.snapshot.paramMap.get('city_abbr');
    console.log(city_abbr);
    this.router.navigate([`get-cities-searched/${city_abbr}`]);
  }

}
