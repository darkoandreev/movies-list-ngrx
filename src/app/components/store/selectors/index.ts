import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState, moviesFeatureName } from '../reducers';
import { moviesListSelect, moviesListLoaded } from './movies.selectors';

const getMoviesModule = createFeatureSelector<IState>(moviesFeatureName);

const getMoviesListSelector = createSelector(
    getMoviesModule,
    state => state.moviesList
)

export const getMoviesList = createSelector(
    getMoviesListSelector,
    moviesListSelect
)

export const getMoviesListLoaded = createSelector(
    getMoviesListSelector,
    moviesListLoaded
)
