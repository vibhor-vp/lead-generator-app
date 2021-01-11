import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SuccessModalComponent } from "./common/success-modal/success-modal.component";

@NgModule({
    declarations: [SuccessModalComponent],
    imports: [CommonModule, FormsModule],
    exports: [SuccessModalComponent]
})

export class AppCommonModule {

}