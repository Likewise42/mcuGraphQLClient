import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { McuGraphService } from '../mcu-graph.service';
import { Character } from '../character';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

    @Input() character: Character;

    constructor(
        private mcuGraphService: McuGraphService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.getCharacter();
    }

    getCharacter(): void{
        const id = this.route.snapshot.paramMap.get('id');

        this.mcuGraphService.getCharacter(id)
            .subscribe(character => this.character = character);
    }

}
