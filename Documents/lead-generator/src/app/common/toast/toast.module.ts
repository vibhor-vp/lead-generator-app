import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToastComponent } from "./toast.component";
import { ToastService } from "./toast.service";

@NgModule({
    declarations: [ToastComponent],
    imports: [CommonModule],
    providers: [ToastService],
    exports: [ToastComponent]
})

export class ToastModule {
    constructor() { }
}