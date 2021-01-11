import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LeadModel } from "src/models/lead.model";
import { AppService } from "../app.service";
import { LeadGeneratorService } from "./lead-generator.service";

@Component({
    selector: 'lead-generator',
    templateUrl: './lead-generator.component.html',
    styleUrls: ['./lead-generator.component.scss']
})

export class LeadGeneratorComponent implements OnInit, OnDestroy {
    _leadData: LeadModel = new LeadModel();
    formSubmittedSuccesfully: boolean;
    queryParamSub: Subscription;
    constructor(private _leadGeneratorService: LeadGeneratorService,
        private _appService: AppService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.queryParamSub = this._activatedRoute.queryParams.subscribe((_queryParams) => {
            if (_queryParams && _queryParams['user_id']) {
                let _userId = _queryParams['user_id'];
                this._appService.setUserData(this._appService._dummyUserMAP[_userId]);
            }
        })
    }

    onLeadSubmit(formObj: NgForm): void {
        if (formObj.valid) {  // we can check the email input over here using regular expression and then by using test() method of regular expression.
            this.saveLead(this._leadGeneratorService.setLeadPayload(this._leadData));
            this.formSubmittedSuccesfully = true;
        }
    }

    saveLead(leadObj: LeadModel): void {
        this._appService.pushToLeadData(leadObj);
    }

    routeToLeadListing(): void {
        this._router.navigate(['/listing'], { queryParams: { user_id: this._appService.getUserData().id } });
    }

    ngOnDestroy(): void {
        if (this.queryParamSub) {
            this.queryParamSub.unsubscribe();
        }
    }
}