import { User } from "./user.interface";

export interface NoteCreateResponse {
    user: User;
    title: string;
    content: string;
    color: string;
    favourite: boolean;
}