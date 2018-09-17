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
    moviesControl = new FormControl('', Validators.required);
    movieTitleControl = new FormControl('', Validators.required);
    movieRunTimeControl = new FormControl('', [Validators.required, Validators.min(1)]);
    actors;
    actorsControl = new FormControl('', Validators.required);
    actorNameControl = new FormControl('', Validators.required);
    actorAgeControl = new FormControl('', [Validators.required, Validators.min(1)]);
    characters;
    charactersControl = new FormControl('', Validators.required);
    characterNameControl = new FormControl('', Validators.required);

    movieForm = new FormGroup({
        actors: this.actorsControl,
        characters: this.charactersControl,
        movieTitle: this.movieTitleControl,
        movieRunTime: this.movieRunTimeControl
    });

    actorForm = new FormGroup({
        movies: this.moviesControl,
        characters: this.charactersControl,
        actorName: this.actorNameControl,
        actorAge: this.actorAgeControl
    })

    characterForm = new FormGroup({
        movies: this.moviesControl,
        actors: this.actorsControl,
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
        console.log(selectedPageType);
        switch (selectedPageType) {
            case 'Movie':
                this.mcuGraphService.addMovie(this.movieTitleControl.value, this.movieRunTimeControl.value, this.actorsControl.value, this.charactersControl.value);
                break;
        
            default:
                break;
        }

        this.characterForm.reset();
        this.actorForm.reset();
        this.movieForm.reset();
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
