

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

}