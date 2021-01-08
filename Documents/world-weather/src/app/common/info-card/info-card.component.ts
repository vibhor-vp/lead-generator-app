import { Component, Input } from "@angular/core";
import { InfoCardModel } from "src/models/info-card.model";

@Component({
    selector: 'info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent {
    @Input() cardDetails: InfoCardModel;
    constructor() { }
}