import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
    //main
    { path: 'dashboard', component: DashboardComponent },

    //movies
    { path: 'movies', component: MoviesComponent },
    { path: 'movies/:id', component: MovieDetailComponent },

    //actors
    { path: 'actors', component: ActorsComponent },
    { path: 'actors/:id', component: ActorDetailComponent },

    //characters
    { path: 'characters', component: CharactersComponent },
    { path: 'characters/:id', component: CharacterDetailComponent },

    //default
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }