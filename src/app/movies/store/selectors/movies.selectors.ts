import { IMoviesListState } from '../reducers/movies.reducers';

export const moviesListSelect = (state: IMoviesListState) => state.movies;
export const moviesListLoaded = (state: IMoviesListState) => state.isLoaded;