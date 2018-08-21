import { Component, OnInit } from '@angular/core';

import { McuGraphService } from '../mcu-graph.service';
import { Character } from '../character';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    characters: Character[];

    constructor(private mcuGraphService: McuGraphService) { }

    ngOnInit(): void {
        this.getAllCharacters();
    }

    getAllCharacters(): void {
        console.log('get characters');

        this.mcuGraphService.getAllCharacters()
        .subscribe((returnData)=>{
            this.characters = returnData;
        });
    }

}
