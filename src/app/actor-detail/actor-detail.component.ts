import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { McuGraphService } from '../mcu-graph.service';
import { Actor } from '../actor';

@Component({
    selector: 'app-actor-detail',
    templateUrl: './actor-detail.component.html',
    styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

    @Input() actor: Actor;

    constructor(
        private mcuGraphService: McuGraphService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.getActor();
    }

    getActor(): void {
        const id = this.route.snapshot.paramMap.get('id');

        this.mcuGraphService.getActor(id)
            .subscribe(actor => this.actor = actor);
    }

}
