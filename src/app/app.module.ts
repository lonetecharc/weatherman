import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { WeatherMapService } from './services/weather-map.service';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { HumidityFlagPipe } from './pipes/humidity-flag.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CityDetailComponent } from './components/city-detail/city-detail.component';

const appRoutes: Routes = [
  { path: 'get-cities', component: CityListComponent },
  { path: 'get-cities-searched/:city_name', component: CityListComponent },
  { path: 'city-weather/:woeid/:city_name/:city_abbr',      component: WeatherListComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    LandingPageComponent,
    WeatherListComponent,
    HumidityFlagPipe,
    HighlightDirective,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6N9reZADbpgvVbpo8w7Oq0cjKlBcdOlw'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [WeatherMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
