import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { ToastService } from "./toast.service";

@Component({
    selector: 'toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit, OnDestroy {
    @Input() showToastSubject: Subject<any>;
    toastMessage: string;
    toastSub: Subscription
    constructor(private _toastService: ToastService) { }

    ngOnInit(): void {
        this.toastSub = this._toastService.showToastSubject.subscribe(msgText => {
            this.toastMessage = msgText;
            setTimeout(() => {
                this.toastMessage = '';
            }, 3000);
        })
    }

    ngOnDestroy(): void {
        if (this.toastSub) {
            this.toastSub.unsubscribe();
        }
    }
}