import { Component, OnInit } from "@angular/core";
import { LoaderService } from "./loader.service";

@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
    _showLoader: boolean;

    constructor(private _loaderService: LoaderService) { }

    ngOnInit(): void {
        this._loaderService.showLoaderSubject.subscribe(show => {
            this._showLoader = show;
        })
    }

}