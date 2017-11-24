import { TestBed, inject } from '@angular/core/testing';

import { WeatherMapService } from './weather-map.service';

describe('WeatherMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherMapService]
    });
  });

  it('should be created', inject([WeatherMapService], (service: WeatherMapService) => {
    expect(service).toBeTruthy();
  }));
});
