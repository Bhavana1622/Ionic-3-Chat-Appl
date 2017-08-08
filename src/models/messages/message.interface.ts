import { Profile } from "../user/user.interface";

export interface Message {
user : Profile;
date: Date;
lastMessage: string;

}