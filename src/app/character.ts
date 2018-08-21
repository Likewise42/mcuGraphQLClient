import {Actor} from './actor';
import {Movie} from './movie';

export class Character {
    name: String;
    movies: Movie[];
    actors: Actor[];
    id: String;
    timesAccessed: Number;
}