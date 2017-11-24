import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { strictEqual } from 'assert';
import * as _ from 'lodash';
import { WeatherMapService } from '../../services/weather-map.service';
import { CityMeta } from '../../models/citymeta';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  public cityMetaList: CityMeta[];
  public weatherForCity: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private weatherMapService: WeatherMapService) { }

  ngOnInit() {
    const city_name = this.route.snapshot.paramMap.get('city_name');
    console.log(city_name);
    if (!_.isNil(city_name)) {
      this.weatherForCity = city_name;
      this.weatherMapService.getAllCityMeta(city_name)
      .subscribe(d => this.cityMetaList = d);
    }
  }

  getMeta(city: string) {
    this.weatherMapService.getAllCityMeta(city)
    .subscribe(d => {
      this.cityMetaList = d;
      console.log(this.cityMetaList);
    });
  }

  getLong(latlang: string): number {
    return parseFloat(latlang.split(',')[1]);
  }

  getLat(latlang: string): number {
    return parseFloat(latlang.split(',')[0]);
  }

}
