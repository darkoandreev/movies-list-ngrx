import { createAction, props } from '@ngrx/store';
import { IMovie } from '../models/movie.interface';

// Get movies
export const getMovies = createAction('[Movies list] Get movies');
export const getMoviesSuccess = createAction('[Movies list] Get movies success', props<{ movies: IMovie[] }>());
export const getMoviesFailed = createAction('[Movies list] Get movies failed', (error: Error) => ({ error }));

// Add movie
export const addMovie = createAction('[Movies list] Add movie', props<{ movie: IMovie }>())
export const addMovieSuccess = createAction('[Movies list] Add movie success', props<{ movie: IMovie }>())
export const addMovieFailed = createAction('[Movies list] Add movie failed', (error: Error) => ({ error }));

// Delete movie
export const deleteMovie = createAction('[Movies list] Delete movie', props<{ id: number }>())
export const deleteMovieSuccess = createAction('[Movies list] Delete movie success', props<{ id: number }>())
export const deleteMovieFailed = createAction('[Movies list] Delete movie failed', (error: Error) => ({ error }));
