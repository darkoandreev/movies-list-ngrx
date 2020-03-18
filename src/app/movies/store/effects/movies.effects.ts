import { Injectable } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getMovies, getMoviesSuccess, getMoviesFailed, addMovie, addMovieSuccess, addMovieFailed, deleteMovie, deleteMovieSuccess, deleteMovieFailed, editMovie, editMovieSuccess, editMovieFailed } from '../actions/movies-list.actions';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MovieEffects {
    constructor(private actions$: Actions, private movieService: MovieService) { }

    loadMovies$ = createEffect(() => 
        this.actions$.pipe(
                ofType(getMovies),
                mergeMap(() => 
                    this.movieService.getMovies()
                        .pipe(
                            map(movies => getMoviesSuccess({ movies })),
                            catchError(error => [getMoviesFailed(error)])
                        )
                ),
            )
    )

    addMovie$ = createEffect(() => 
        this.actions$.pipe(
            ofType(addMovie),
            switchMap(({ movie }) => 
                this.movieService.addMovie(movie).pipe(
                    map(movie => addMovieSuccess({ movie })),
                    catchError(error => [addMovieFailed(error)])
                )
            )
        )
    )

    editMovie$ = createEffect(() => 
       this.actions$.pipe(
           ofType(editMovie),
           switchMap(({ movie }) => 
                this.movieService.editMovie(movie).pipe(
                    map(movie => editMovieSuccess({ movie })),
                    catchError(error => [editMovieFailed(error)])
                )
           )
       )             
    
    )

    deleteMovie$ = createEffect(() => 
        this.actions$.pipe(
            ofType(deleteMovie),
            switchMap(({ id }) => 
                this.movieService.deleteMovie(id).pipe(
                    map(() => deleteMovieSuccess({ id })),
                    catchError(error => [deleteMovieFailed(error)])
                )   
            )
        )
    )
}