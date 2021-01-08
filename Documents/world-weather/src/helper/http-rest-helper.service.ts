import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class HttpHelperService {
    constructor(private _http: HttpClient) { }

    get(url): Observable<Object> {
        return this._http.get(url);
    }
}