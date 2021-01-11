import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ToastComponent } from "../common/toast/toast.component";
import { ToastModule } from "../common/toast/toast.module";
import { LeadListCardComponent } from "./lead-list-card/lead-list-card.component";
import { LeadListingComponent } from "./lead-listing.component";

const _routes: Routes = [
    { path: '', component: LeadListingComponent }
]

@NgModule({
    declarations: [LeadListingComponent, LeadListCardComponent],
    imports: [RouterModule.forChild(_routes), CommonModule, FormsModule, ToastModule]
})

export class LeadListingModule {
    constructor() { }
}