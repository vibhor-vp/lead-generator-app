import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHelperService } from "../../helper/http-rest-helper.service";

@Injectable()
export class CountryListService {
    constructor(private _httpHelperService: HttpHelperService) { }

    getCountriesData(): Observable<any> {
        return this._httpHelperService.get('https://restcountries.eu/rest/v2/all');
    }


}