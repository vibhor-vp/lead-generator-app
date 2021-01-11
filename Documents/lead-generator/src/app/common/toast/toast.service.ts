import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ToastService{
    showToastSubject: Subject<any> = new Subject<any>();

    showToast(msg: string): void{
        this.showToastSubject.next(msg);
    }
}