import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { McuGraphService } from '../mcu-graph.service';
import { Movie } from '../movie';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    @Input() movie: Movie;

    constructor(
        private mcuGraphService: McuGraphService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.getMovie();
    }

    getMovie(): void {
        const id = this.route.snapshot.paramMap.get('id');

        this.mcuGraphService.getMovie(id)
            .subscribe(movie => this.movie = movie);
    }

}
