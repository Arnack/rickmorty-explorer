import {ILocation} from "../location/location";

export interface ICharacter {
    name: string;
    image: string;
    origin: ILocation;
    location: ILocation;
    species: string;
    status: string;
    gender: string;
    episode: string[];
}