import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppCommonModule } from "../app-common.module";
import { LeadGeneratorComponent } from "./lead-generator.component";
import { LeadGeneratorService } from "./lead-generator.service";

const _routes: Routes = [
    { path: '', component: LeadGeneratorComponent }
]

@NgModule({
    declarations: [LeadGeneratorComponent],
    imports: [RouterModule.forChild(_routes), CommonModule, FormsModule, AppCommonModule],
    providers: [LeadGeneratorService]
})

export class LeadGeneratorModule {

}