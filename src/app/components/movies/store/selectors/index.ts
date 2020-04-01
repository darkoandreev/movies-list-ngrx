import { createFeatureSelector, createSelector } from "@ngrx/store";
import { moviesFeatureName } from '../reducers';
import { adapter, IMoviesListState } from '../reducers/movies.reducers';

const getMoviesModule = createFeatureSelector<IMoviesListState>(moviesFeatureName);

export const {
    selectEntities,
    selectAll,
    selectIds,
    selectTotal
} = adapter.getSelectors(getMoviesModule);

const selectAllMovies = selectAll;

export const getMoviesList = createSelector(
    getMoviesModule,
    selectAllMovies
)