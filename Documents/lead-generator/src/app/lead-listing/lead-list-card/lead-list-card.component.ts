import { Component, Input, OnInit } from "@angular/core";
import { LEAD_CARD_IMAGES, LEAD_STATUS_MAPPER } from "src/app/app.constants";
import { AppService } from "src/app/app.service";
import { ToastService } from "src/app/common/toast/toast.service";
import { LeadModel } from "src/models/lead.model";

@Component({
    selector: 'lead-list-card',
    templateUrl: './lead-list-card.component.html',
    styleUrls: ['./lead-list-card.component.scss']
})

export class LeadListCardComponent implements OnInit {
    @Input() leadCardData: LeadModel;
    @Input() isFirstCard: boolean;
    constructor(private _appService: AppService,
        private _toastMsg: ToastService) { }

    ngOnInit(): void {
        this.leadCardData.img_url = this.getCardImgUrl(this.leadCardData);
    }

    getCardImgUrl(card: LeadModel): string {
        let img = ''
        if (card.status === LEAD_STATUS_MAPPER.UNCLAIMED) {
            img = LEAD_CARD_IMAGES.UNCLAIMED;
        } else if (card.status === LEAD_STATUS_MAPPER.CLAIMED) {
            if (card.claimedBy.id === this._appService.getUserData().id) {
                img = LEAD_CARD_IMAGES.CLAIMED;
            } else {
                img = LEAD_CARD_IMAGES.LOCKED;
            }
        }
        return '../../assets/images/' + img;
    }

    isSelfClaimed(card: LeadModel): boolean {
        return card.status === LEAD_STATUS_MAPPER.CLAIMED && card.claimedBy.id === this._appService.getUserData().id;
    }

    onLeadClick(leadData: LeadModel) {
        if (!this.isLeadClaimed(leadData)) {
            this.updateLeadData(leadData);
        } else if (!this.isSelfClaimed(leadData)) {
            this._toastMsg.showToast('This is already claimed by ' + leadData.claimedBy.name);
        }
    }

    isLeadClaimed(leadData: LeadModel): boolean {
        return leadData.status === LEAD_STATUS_MAPPER.CLAIMED;
    }

    updateLeadData(leadDataObj: LeadModel): void {
        let _lead = this._appService.getLeadsdata().find(lead => lead.id === leadDataObj.id);
        _lead.status = LEAD_STATUS_MAPPER.CLAIMED;
        _lead.claimedBy = {
            id: this._appService.getUserData().id,
            name: this._appService.getUserData().name
        };
        _lead.img_url = this.getCardImgUrl(leadDataObj);
    }
}