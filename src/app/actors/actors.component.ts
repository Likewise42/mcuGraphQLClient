import { Component, OnInit } from '@angular/core';

import { McuGraphService } from '../mcu-graph.service';
import { Actor } from '../actor';

@Component({
    selector: 'app-actors',
    templateUrl: './actors.component.html',
    styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

    actors: Actor[]

    constructor(private mcuGraphService: McuGraphService) { }

    ngOnInit(): void {
        this.getAllActors();
    }

    getAllActors(): void {
        this.mcuGraphService.getAllActors()
            .subscribe((returnData) => {
                this.actors = returnData;
            });
    }

}
