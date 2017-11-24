import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

import { CityMeta } from '../models/citymeta';
import { ConsolidatedWeather } from '../models/consolidated_weather';

@Injectable()
export class WeatherMapService {
  private baseUrl = 'https://www.metaweather.com/api';
  constructor(private http: Http) { }

  getAllCityMeta(searchQuery: string): Observable<CityMeta[]> {
    const cityMeta$ = this.http
                          .get(`${this.baseUrl}/location/search/?query=${searchQuery}`)
                          .map(mapCityMeta);
    return cityMeta$;
  }

  getCityConsolidatedWeather(woeid: string): Observable<ConsolidatedWeather[]> {
    const consolidatedWeather$ = this.http
                          .get(`${this.baseUrl}/location/${woeid}`)
                          .map(mapConsolidatedWeather);
    return consolidatedWeather$;

  }
}

function mapCityMeta(response: any): CityMeta[] {
  return response.json().map(toCityMeta);
}

function toCityMeta(r: any): CityMeta {
  const cityMeta = <CityMeta>({
    title: r.title,
    location_type: r.location_type,
    woeid: r.woeid,
    latt_long: r.latt_long
  });
  return cityMeta;
}

function mapConsolidatedWeather(response: any): ConsolidatedWeather[] {
  // console.log(response.json());
  return response.json().consolidated_weather.map(toConsolidatedWeather);
}

function toConsolidatedWeather(r: any): ConsolidatedWeather {
  const consolidatedWeather = <ConsolidatedWeather>({
    id: r.id,
    weather_state_name: r.weather_state_name,
    weather_state_abbr: r.weather_state_abbr,
    wind_direction_compass: r.wind_direction_compass,
    created: moment(r.created).format('hh:mm:ss a'),
    applicable_date: r.applicable_date,
    min_temp: r.min_temp.toFixed(2),
    max_temp: r.max_temp.toFixed(2),
    the_temp: r.the_temp,
    wind_speed: r.wind_speed,
    wind_direction: r.wind_direction,
    air_pressure: r.air_pressure.toFixed(2),
    humidity: r.humidity,
    visibility: r.visibility,
    predictability: r.predictability
  });
  return consolidatedWeather;
}
