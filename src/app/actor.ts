import {Movie} from './movie';
import {Character} from './character';

export class Actor {
    name: String;
    movies: Movie[];
    characters: Character[];
    age: Number;
    id: String;
    timesAccessed: Number;
}