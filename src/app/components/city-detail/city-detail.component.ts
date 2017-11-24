import { Component, OnInit, Input } from '@angular/core';
import { CityMeta } from '../../models/citymeta';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input()
  city: CityMeta;

  @Input()
  weatherForCity: string;

  passed_city: CityMeta;
  constructor() { }

  ngOnInit() {
    this.passed_city = this.city;
  }

  getLong(latlang: string): number {
    return parseFloat(latlang.split(',')[1]);
  }

  getLat(latlang: string): number {
    return parseFloat(latlang.split(',')[0]);
  }


}
