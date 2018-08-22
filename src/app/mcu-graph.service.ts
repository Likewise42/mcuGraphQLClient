import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { Actor } from './actor';
import { Character } from './character';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    })
}

@Injectable({
    providedIn: 'root'
})

export class McuGraphService {

    constructor(private http: HttpClient) { }

    private url = 'https://mcu-graphql-server.herokuapp.com/graphql';

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        }
    }

    getMovie(id: String): Observable<Movie> {
        const sendString =
            `query ($id: String){ 
                movie(id: $id){
                    title
                    runTime
                    id
                    timesAccessed
                    actors{
                        name
                        id
                    }
                    characters{
                        name
                        id
                    }
                }
            }`;

        const sendData = JSON.stringify({
            query: sendString,
            variables: {
                id
            }
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.movie;
            }),
            tap(_ => console.log(`got movie`)),
            catchError(this.handleError<Movie>(`getMovie`))
        );
    }

    getRandomMovie(): Observable<Movie> {
        const sendString =
            `query { 
            randomMovie{
                title
                runTime
                id
                timesAccessed
                actors{
                    name
                    id
                }
                characters{
                    name
                    id
                }
            }
        }`;

        const sendData = JSON.stringify({
            query: sendString
        });


        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.randomMovie;
            }),
            tap(_ => console.log(`got movie`)),
            catchError(this.handleError<Movie>(`getMovie`))
        );
    }

    getAllMovies(): Observable<Movie[]> {
        const sendString =
            `query{ 
                allMovies{
                    title
                    id
                }
            }`;

        const sendData = JSON.stringify({
            query: sendString
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.allMovies;
            }),
            tap(_ => console.log(_)),
            catchError(this.handleError<Movie>(`getAllMovies`))
        );
    }

    getActor(id: String): Observable<Actor> {
        const sendString =
            `query ($id: String){ 
                actor(id: $id){
                    name
                    age
                    id
                    timesAccessed
                    movies{
                        title
                        id
                    }
                    characters{
                        name
                        id
                    }
                }
            }`;

        const sendData = JSON.stringify({
            query: sendString,
            variables: {
                id
            }
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.actor;
            }),
            tap(_ => console.log(`got actor`)),
            catchError(this.handleError<Actor>(`getActor`))
        );
    }

    getRandomActor(): Observable<Actor> {
        const sendString =
            `query{ 
            randomActor{
                name
                age
                id
                timesAccessed
                movies{
                    title
                    id
                }
                characters{
                    name
                    id
                }
            }
        }`;

        const sendData = JSON.stringify({
            query: sendString,
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.randomActor;
            }),
            tap(_ => console.log(`got actor`)),
            catchError(this.handleError<Actor>(`getActor`))
        );
    }

    getAllActors(): Observable<Actor[]> {
        const sendString =
            `query{ 
                allActors{
                    name
                    id
                }
            }`;

        const sendData = JSON.stringify({
            query: sendString
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.allActors;
            }),
            tap(_ => console.log(_)),
            catchError(this.handleError<Actor>(`getAllActors`))
        );
    }

    getCharacter(id: String): Observable<Character> {
        const sendString =
            `query ($id: String){ 
                character(id: $id){
                    name
                    id
                    timesAccessed
                    movies{
                        title
                        id
                    }
                    actors{
                        name
                        id
                    }
                }
            }`;

        const sendData = JSON.stringify({
            query: sendString,
            variables: {
                id
            }
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.character;
            }),
            tap(_ => console.log(`got character`)),
            catchError(this.handleError<Actor>(`getCharacter`))
        );
    }

    getRandomCharacter(): Observable<Character> {
        const sendString =
            `query{ 
                randomCharacter{
                    name
                    id
                    timesAccessed
                    movies{
                        title
                        id
                    }
                    actors{
                        name
                        id
                    }
                }
            }`;

        const sendData = JSON.stringify({
            query: sendString,
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.randomCharacter;
            }),
            tap(_ => console.log(`got character`)),
            catchError(this.handleError<Actor>(`getCharacter`))
        );
    }

    getAllCharacters(): Observable<Character[]> {
        const sendString =
            `query{ 
                allCharacters{
                    name
                    id
                }
            }`;

        const sendData = JSON.stringify({
            query: sendString
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data.allCharacters;
            }),
            tap(_ => console.log(_)),
            catchError(this.handleError<Actor>(`getAllCharacters`))
        );
    }

    getTopFive(): Observable<Actor[]> {
        const sendString =
            `query{ 
            topFiveMovies{
                title
                id
                timesAccessed
            }
            topFiveActors{
                name
                id
                timesAccessed
            }
            topFiveCharacters{
                name
                id
                timesAccessed
            }
        }`;

        const sendData = JSON.stringify({
            query: sendString
        });

        return this.http.post<any>(this.url, sendData, httpOptions).pipe(
            map((response) => {
                return response.data;
            }),
            tap(_ => console.log(_)),
            catchError(this.handleError<Actor>(`getTopFiveActors`))
        );
    }
}
