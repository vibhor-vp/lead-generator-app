import { Injectable } from "@angular/core";
import { UserModel } from "src/models/user.model";
import { LeadModel } from "../models/lead.model";
import { LEAD_STATUS_MAPPER } from './app.constants'

@Injectable({
    providedIn: 'root'
})

export class AppService {
    public _dummyUserMAP = {
        1: { id: 1, name: 'John' },
        2: { id: 2, name: 'David' }
    }
    public _userData: UserModel;
    constructor() {
        //assuming 2 users as {id: 1, name: John} and {id: 2, name: David}
        //and by default is
        this.setUserData(this._dummyUserMAP[1]);
    }
    _leadsDummyData: Array<LeadModel> = [
        {
            id: 1,
            user_name: 'Client Name #1',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #1',
            claimedBy: this._dummyUserMAP[1],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 2,
            user_name: 'Client Name #2',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #2',
            claimedBy: this._dummyUserMAP[1],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 3,
            user_name: 'Client Name #3',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #3',
            claimedBy: this._dummyUserMAP[2],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 4,
            user_name: 'Client Name #4',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #4',
            claimedBy: this._dummyUserMAP[1],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 5,
            user_name: 'Client Name #5',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #5',
            claimedBy: this._dummyUserMAP[2],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 6,
            user_name: 'Client Name #6',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #6',
            claimedBy: this._dummyUserMAP[1],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 7,
            user_name: 'Client Name #7',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #7',
            claimedBy: this._dummyUserMAP[1],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 8,
            user_name: 'Client Name #8',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #8',
            claimedBy: this._dummyUserMAP[1],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 9,
            user_name: 'Client Name #9',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #9',
            claimedBy: this._dummyUserMAP[2],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
        {
            id: 10,
            user_name: 'Client Name #10',
            email: 'dsfs.ew@dsf.sf',
            phone_number: '3242342324',
            comments: 'hihihihi Client Name #10',
            claimedBy: this._dummyUserMAP[2],
            status: LEAD_STATUS_MAPPER.CLAIMED
        },
    ]

    pushToLeadData(_leadObj: LeadModel): void {
        this._leadsDummyData.push(_leadObj);
    }

    getLeadsdata(): Array<LeadModel> {
        return this._leadsDummyData;
    }

    setUserData(user: UserModel): void {
        this._userData = {
            id: user.id,
            name: user.name
        }
    }

    getUserData(): UserModel {
        return this._userData;
    }


}