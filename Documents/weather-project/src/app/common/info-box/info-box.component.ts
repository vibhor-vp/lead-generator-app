import { Component, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'info-box',
    templateUrl: './info-box.component.html',
    styleUrls: ['./info-box.component.scss']
})

export class InfoBoxComponent implements OnInit {
    @Input() infoBoxDetails: InfoBoxModel;
    @Input() darkModeEnabledSubject: Subject<boolean>;
    _enableDarkMode: boolean = false;
    constructor() { }

    ngOnInit(): void {
        this.darkModeEnabledSubject.subscribe(enableDarkMode => {
            this._enableDarkMode = enableDarkMode;
        })
    }
}

export interface InfoBoxModel {
    title?: string;
    img_url?: string;
}