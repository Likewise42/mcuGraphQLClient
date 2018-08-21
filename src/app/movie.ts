import {Actor} from './actor';
import {Character} from './character';

export class Movie {
    title: String;
    actors: Actor[];
    characters: Character[];
    runTime: Number;
    id: String;
    timesAccessed: Number;
}