import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherDetailModel } from 'src/models/weather-detail.model';
import { WEATHER_DETAIL_UNITS } from '../app.constants';
import { LoaderService } from '../common/loader/loader.service';
import { WeatherDetailService } from './weather-detail.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  img_base_url: string = '../../../assets/images/'
  weatherDetails: WeatherDetailModel;
  WEATHER_DETAIL_UNITS = WEATHER_DETAIL_UNITS;
  unitSelected: string;

  constructor(private _weatherDetailService: WeatherDetailService,
    private _activatedRoute: ActivatedRoute, private _router: Router, private _loaderService: LoaderService) { }

  ngOnInit(): void {
    let _queryParams = this._activatedRoute.snapshot.queryParams;
    this.unitSelected = _queryParams.unit;
    this.weatherDetails = {
      capital: _queryParams.capital
    }
    this.getWeatherDetails(_queryParams);
  }

  getWeatherDetails(_queryParams): void {
    this._loaderService.showLoader(true);
    this._weatherDetailService.getWeatherDetails(_queryParams)
      .subscribe((resp) => {
        this._loaderService.showLoader(false);
        if (resp) {
          this.weatherDetails.main = resp.main;
          this.weatherDetails.wind = resp.wind
        }
      });
  }

  unitChanged(val): void {
    this.unitSelected = val;
    let _queryParams = { ... this._activatedRoute.snapshot.queryParams };
    _queryParams.unit = val;
    // this.getWeatherDetails(_queryParams);
    // this._router.navigate(['wea'])
    this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: _queryParams, replaceUrl: true })
      .then(() => {
        this.getWeatherDetails(_queryParams);
      });
  }

}
