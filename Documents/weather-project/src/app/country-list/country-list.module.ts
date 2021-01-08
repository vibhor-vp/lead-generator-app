import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppCommonModule } from "../common/app-common.module";
import { CountryListComponent } from "./country-list.component";
import { CountryListService } from "./country-list.service";

const _routes: Routes = [
    { path: '', component: CountryListComponent }
]

@NgModule({
    declarations: [CountryListComponent],
    imports: [RouterModule.forChild(_routes), CommonModule, FormsModule, AppCommonModule],
    providers: [CountryListService]
})

export class WeatherListModule {
    constructor() { }
}