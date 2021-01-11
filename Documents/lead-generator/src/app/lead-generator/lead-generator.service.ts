import { Injectable } from "@angular/core";
import { LeadModel } from "src/models/lead.model";
import { LEAD_STATUS_MAPPER } from "../app.constants";
import { AppService } from "../app.service";

@Injectable()
export class LeadGeneratorService {

    constructor(private _appService: AppService) { }

    setLeadPayload(leadObj: LeadModel): LeadModel {
        let _payload: LeadModel = {
            user_name: leadObj.user_name,
        }
        if (leadObj.phone_number) {
            _payload.phone_number = leadObj.phone_number;
        }
        if (leadObj.email) {
            _payload.email = leadObj.email;
        }
        if (leadObj.comments) {
            _payload.comments = leadObj.comments;
        }
        _payload.status = LEAD_STATUS_MAPPER.UNCLAIMED;
        _payload.id = this._appService._leadsDummyData.length + 1;
        return _payload
    }
}