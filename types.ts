import { Moment } from "moment";

export interface Profile {
    name: string;
    type: string;
    social: SocialMedia;
}

export interface SocialMedia {
    furaffinity: string;
    twitter: string;
}

export interface Artist extends Profile {

}

export interface Maker extends Profile {

}

export interface Chat {
    name: string;
    type: string;
}

export interface Event {
    name: string;
    location: string;
    address: string;
    fursuiting: boolean;
    about: string
    events: EventDetail[]
}

export interface EventDetail {
    cancelled: boolean;
    postponed: boolean;
    tentative: boolean;
    start: Moment;
    event: Event;
}