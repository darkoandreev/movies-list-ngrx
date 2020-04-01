import { IMovie } from '../models/movie.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { getMoviesSuccess, getMoviesFailed, addMovieSuccess, deleteMovieSuccess, addMovieFailed, deleteMovieFailed, editMovieSuccess, editMovieFailed } from '../actions/movies-list.actions';

export interface IMoviesListState extends EntityState<IMovie> {
    movies: IMovie[];
    isLoaded?: boolean;
    errorMessage?: string;
}

export const adapter: EntityAdapter<IMovie> = createEntityAdapter<IMovie>({
    selectId: (movie) => movie.id,
    sortComparer: false
});

const initialState: IMoviesListState = adapter.getInitialState({
    movies: []
});

const reducer = createReducer(
    initialState,
    on(getMoviesSuccess, (state, { movies }) => adapter.addMany(movies, state)),
    on(addMovieSuccess, (state, { movie }) => adapter.addOne(movie, state)),
    on(editMovieSuccess, (state, { movie }) => adapter.updateOne({ id: movie.id, changes: movie }, state)),
    on(deleteMovieSuccess, (state, { id }) => adapter.removeOne(id, state)),
    on(addMovieFailed, (state, error) => ({
        ...state,
        movies: [],
        errorMessage: error.error.message
    })),
    on(editMovieFailed, (state, error) => ({
        ...state,
        errorMessage: error.error.message
    })),
    on(getMoviesFailed, (state, error) => ({
        ...state,
        movies: [],
        isLoaded: false,
        errorMessage: error.error.message
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