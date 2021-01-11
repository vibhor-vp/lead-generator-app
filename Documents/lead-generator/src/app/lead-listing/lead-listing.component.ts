import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { LeadModel } from "src/models/lead.model";
import { AppService } from "../app.service";

@Component({
    templateUrl: './lead-listing.component.html',
    styleUrls: ['./lead-listing.component.scss']
})

export class LeadListingComponent implements OnInit, OnDestroy {
    leadListingData: Array<LeadModel> = [];
    queryParamSub: Subscription;
    constructor(private _appService: AppService,
        private _activetedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.queryParamSub = this._activetedRoute.queryParams.subscribe((_queryParams) => {
            if (_queryParams && _queryParams['user_id']) {
                let _userId = _queryParams['user_id'];
                this._appService.setUserData(this._appService._dummyUserMAP[_userId]);
            }
            this._init();
        })

    }

    _init(): void {
        this.leadListingData = this._appService.getLeadsdata().sort((a, b) => b.id - a.id);
    }

    ngOnDestroy(): void {
        if (this.queryParamSub) {
            this.queryParamSub.unsubscribe();
        }
    }
}