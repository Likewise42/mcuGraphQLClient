import { Component, OnInit } from '@angular/core';

import { McuGraphService } from '../mcu-graph.service';
import { Movie } from '../movie';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    movies: Movie[];

    constructor(private mcuGraphService: McuGraphService) { }

    ngOnInit(): void{
        this.getAllMovies();
    }

    getAllMovies(): void {
        console.log(`get movies`);

        this.mcuGraphService.getAllMovies()
            .subscribe((returnData) => {
                this.movies = returnData;

            });
    }
}
