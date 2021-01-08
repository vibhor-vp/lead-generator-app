import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoaderService {
    showLoaderSubject: Subject<boolean> = new Subject<boolean>();

    constructor() { }

    showLoader(show: boolean) {
        this.showLoaderSubject.next(show);
    }
}