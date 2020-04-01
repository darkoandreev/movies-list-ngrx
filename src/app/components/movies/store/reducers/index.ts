import { IMoviesListState, moviesReducer } from './movies.reducers';
import { ActionReducerMap } from '@ngrx/store';

export const moviesFeatureName = 'moviesList';

export interface IState {
    readonly moviesList: IMoviesListState
}

export const moviesReducerMap: ActionReducerMap<IState> = {
    moviesList: moviesReducer
}