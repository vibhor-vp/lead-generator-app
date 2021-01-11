import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'success-modal',
    templateUrl: './success-modal.component.html'
})

export class SuccessModalComponent {
    @Input() heading: string;
    @Input() img_url: string;
    @Input() text: string;
    @Input() linkText: string;
    @Output() linkClickedEvent: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    onLinkClick(): void {
        this.linkClickedEvent.emit(true);
    }
}