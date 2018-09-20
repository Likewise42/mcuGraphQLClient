import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { McuGraphService } from '../mcu-graph.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    pageTypes = ['Movie', 'Actor', 'Character'];

    movies;
    movieTitleControl = new FormControl('', Validators.required);
    movieRunTimeControl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]);
    movieActorsControl = new FormControl('');
    movieCharactersControl = new FormControl('');

    actors;
    actorNameControl = new FormControl('', Validators.required);
    actorAgeControl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]);
    actorMoviesControl = new FormControl('');
    actorCharactersControl = new FormControl('');

    characters;
    characterNameControl = new FormControl('', Validators.required);
    characterMoviesControl = new FormControl('');
    characterActorsControl = new FormControl('');

    movieForm = new FormGroup({
        actors: this.movieActorsControl,
        characters: this.movieCharactersControl,
        movieTitle: this.movieTitleControl,
        movieRunTime: this.movieRunTimeControl
    });

    actorForm = new FormGroup({
        movies: this.actorMoviesControl,
        characters: this.actorCharactersControl,
        actorName: this.actorNameControl,
        actorAge: this.actorAgeControl
    })

    characterForm = new FormGroup({
        movies: this.characterMoviesControl,
        actors: this.characterActorsControl,
        characterName: this.characterNameControl
    });

    randomPageInfo;
    randomPageType = '';

    topData;

    constructor(private mcuGraphService: McuGraphService) { }

    ngOnInit(): void {
        this.getRandomPage();
        this.getTop();
        this.getAll();
    }

    sendData(selectedPageType: String): void {
        switch (selectedPageType) {
            case 'Movie':
                this.mcuGraphService.addMovie(this.movieTitleControl.value, this.movieRunTimeControl.value, this.movieActorsControl.value, this.movieCharactersControl.value)
                    .subscribe(() => {
                        this.getAll();
                        this.movieForm.reset();
                    })
                break;

            case 'Actor':
                this.mcuGraphService.addActor(this.actorNameControl.value, this.actorAgeControl.value, this.actorMoviesControl.value, this.actorCharactersControl.value)
                    .subscribe(() => {
                        this.getAll();
                        this.actorForm.reset();
                    })
                break;

            case 'Character':
                this.mcuGraphService.addCharacter(this.characterNameControl.value,  this.characterMoviesControl.value, this.characterActorsControl.value)
                    .subscribe(() => {
                        this.getAll();
                        this.characterForm.reset();
                    })
                break;

            default:
                console.log('default of sendData switch hit');
                break;
        }
    }

    getTop(): void {
        this.mcuGraphService.getTopFive()
            .subscribe((returnData) => {
                this.topData = returnData;
            });
    }

    getRandomPage(): void {
        let randNum = Math.random();

        if (randNum >= .66) {
            this.mcuGraphService.getRandomMovie()
                .subscribe((returnData) => {
                    this.randomPageInfo = returnData;
                    this.randomPageType = "movie";
                });

        } else if (randNum >= .33) {
            this.mcuGraphService.getRandomActor()
                .subscribe((returnData) => {
                    this.randomPageInfo = returnData;
                    this.randomPageType = "actor";
                });

        } else {
            this.mcuGraphService.getRandomCharacter()
                .subscribe((returnData) => {
                    this.randomPageInfo = returnData;
                    this.randomPageType = "character";
                });
        }
    }

    getAll(): void {
        this.mcuGraphService.getAllMovies()
            .subscribe((returnData) => {
                this.movies = returnData;
            });
        this.mcuGraphService.getAllActors()
            .subscribe((returnData) => {
                this.actors = returnData;
            });
        this.mcuGraphService.getAllCharacters()
            .subscribe((returnData) => {
                this.characters = returnData;
            });
    }
}
