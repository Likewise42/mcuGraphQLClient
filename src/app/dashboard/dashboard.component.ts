import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { McuGraphService } from '../mcu-graph.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    pageTypes = ['Movie', 'Actor', 'Character'];

    movies;
    moviesControl = new FormControl();
    actors;
    actorsControl = new FormControl();
    characters;
    charactersControl = new FormControl();

    randomPageInfo;
    randomPageType = '';

    topData;

    constructor(private mcuGraphService: McuGraphService) { }

    ngOnInit(): void {
        this.getRandomPage();
        this.getTop();
        this.getAll();
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
