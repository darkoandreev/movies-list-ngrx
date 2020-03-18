import { IMovie } from '../models/movie.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { getMoviesSuccess, getMoviesFailed, addMovieSuccess, deleteMovieSuccess, addMovieFailed, deleteMovieFailed, editMovieSuccess, editMovieFailed } from '../actions/movies-list.actions';
import produce from "immer";

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
    on(editMovieSuccess, (state: IMoviesListState, { movie }) => ({
        ...state,
        movies: produce(state.movies, movies => {
            movies[movies.findIndex(x => x.id === movie.id)] = movie
        })
    })),
    on(editMovieFailed, (state, error) => ({
        ...state,
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