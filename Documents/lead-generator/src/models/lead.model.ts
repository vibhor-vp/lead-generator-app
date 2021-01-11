import { UserModel } from "./user.model";

export class LeadModel {
    id?: number
    user_name: string;
    email?: string;
    phone_number?: string;
    comments?: string;
    claimedBy?: UserModel;// will refer to the userObj of the user claiming it
    status?: number;
    img_url?: string;
}