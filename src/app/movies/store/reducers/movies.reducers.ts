import { IMovie } from '../models/movie.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { getMoviesSuccess, getMoviesFailed, addMovieSuccess, deleteMovieSuccess, addMovieFailed, deleteMovieFailed } from '../actions/movies-list.actions';

export interface IMoviesListState {
    movies: IMovie[];
    isLoaded?: boolean;
    errorMessage?: string;
}

const initialState: IMoviesListState = {
    movies: []
}

const reducer = createReducer(
    initialState,
    on(getMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies,
        isLoaded: true
    })),
    on(getMoviesFailed, (state, error) => ({
        ...state,
        movies: [],
        isLoaded: false,
        errorMessage: error.error.message
    })),
    on(addMovieSuccess, (state, { movie }) => ({
        ...state,
        movies: [...state.movies, movie]
    })),
    on(addMovieFailed, (state, error) => ({
        ...state,
        movies: [],
        errorMessage: error.error.message
    })),
    on(deleteMovieSuccess, (state, { id }) => ({
        ...state,
        movies: state.movies.filter(x => x.id !== id)
    })),
    on(deleteMovieFailed, (state, error) => ({
        ...state,
        movies: [],
        errorMessage: error.error.message
    }))
)

export function moviesReducer(state: IMoviesListState | null, action: Action) {
    return reducer(state, action);
}