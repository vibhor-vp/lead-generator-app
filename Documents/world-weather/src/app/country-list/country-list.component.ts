import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { CountryModel } from "../../models/country-model";
import { APP_ID } from "../app.constants";
import { LoaderService } from "../common/loader/loader.service";
import { CountryListService } from "./country-list.service";

@Component({
    selector: 'country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['country-list.component.scss']
})

export class CountryListComponent implements OnInit {
    public countriesList: Array<CountryModel> = [];
    sort_order = {
        asc: 1,
        desc: 2
    }
    currentSortOrder: number = this.sort_order.asc;
    _conutrySearchText: string = '';
    countriesListCopy: Array<CountryModel>;
    _darkMode: boolean;
    darkModeEnabledSubject: Subject<any> = new Subject<any>();
    constructor(private _countryListService: CountryListService,
        private _router: Router,
        private _loaderService: LoaderService) { }

    ngOnInit(): void {
        this._loaderService.showLoader(true);
        this._countryListService.getCountriesData()
            .subscribe((resp) => { this.getCountriesDataSucc(resp) });
    }

    getCountriesDataSucc(countries: Array<any>): void {
        this._loaderService.showLoader(false);
        if (countries) {
            countries.forEach(country => {
                let _countryData = new CountryModel();
                _countryData.capital = country.capital;
                _countryData.name = country.name;
                _countryData.flag_icon = country.flag;
                _countryData.alpha2Code = country.alpha2Code;
                this.countriesList.push(_countryData);
            })
            this.countriesListCopy = this.countriesList;
            this.sortCountries(this.sort_order.asc);
        }
    }

    onCountryClick(country: CountryModel): void {
        let _queryParams = {
            capital: country.capital + ',' + country.alpha2Code,
            appid: APP_ID,
            unit: 'metric'
        }
        this._router.navigate(['weatherdetails'], { queryParams: _queryParams });
    }

    searchCountries(val) {
        this.countriesList = this.countriesListCopy.filter(country => (country.name.indexOf(val) > -1));
    }

    sortCountries(_sort_order): void {
        this.currentSortOrder = _sort_order;
        this.countriesList.sort((a, b) => {
            return this.currentSortOrder == this.sort_order.asc ? this.sortColumnAscending(a, b) : this.sortColumnDescending(a, b)
        });
    }

    sortColumnAscending(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    sortColumnDescending(a, b) {
        if (a.name < b.name) {
            return 1;
        }
        if (a.name > b.name) {
            return -1;
        }
        return 0;
    }

    changeMode(): void {
        this._darkMode = !this._darkMode;
        this.darkModeEnabledSubject.next(this._darkMode);
    }
}