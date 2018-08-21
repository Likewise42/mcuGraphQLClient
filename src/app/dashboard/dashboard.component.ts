import { Component, OnInit } from '@angular/core';

import { McuGraphService } from '../mcu-graph.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    randomPageInfo = {};
    randomPageType = '';

    topData = {};

    constructor(private mcuGraphService: McuGraphService) { }

    ngOnInit(): void {
        this.getRandomPage();
        this.getTop();
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
}
