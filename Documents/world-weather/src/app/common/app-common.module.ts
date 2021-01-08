import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoBoxComponent } from "./info-box/info-box.component";
import { InfoCardComponent } from "./info-card/info-card.component";

@NgModule({
    declarations: [InfoCardComponent, InfoBoxComponent],
    imports: [CommonModule],
    exports: [InfoCardComponent, InfoBoxComponent]
})

export class AppCommonModule {
    constructor() { }
}