import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHelperService } from "src/helper/http-rest-helper.service";

@Injectable()
export class WeatherDetailService {
    constructor(private _http: HttpHelperService) { }

    getWeatherDetails(payload): Observable<any> {
        let _payload={
            q: payload.capital,
            APPID: payload.appid,
            units: payload.unit
        }
        let url = 'http://api.openweathermap.org/data/2.5/weather?' +
            Object.keys(_payload).map(k => `${k}=${_payload[k]}`).join('&');
        return this._http.get(url);
    }
}