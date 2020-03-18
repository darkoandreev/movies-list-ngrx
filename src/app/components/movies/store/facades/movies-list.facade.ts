import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/movie.interface';
import { Store, select } from '@ngrx/store';
import { IState } from '../reducers';
import { getMoviesList } from '../selectors';
import { deleteMovie, editMovie, addMovie, getMovies } from '../actions/movies-list.actions';

@Injectable({
  providedIn: 'root'
})
export class MoviesListFacade {
  public movies$: Observable<IMovie[]> = this.store.pipe(select(getMoviesList))
  public movie: IMovie;

  constructor(private store: Store<IState>) { }

  getMovies(): void {
    this.store.dispatch(getMovies());
  }

  addMovie(movie: IMovie): void {
    this.store.dispatch(this.movie ? editMovie({ movie }) : addMovie({ movie }));
  }

  deleteMovie(id: number): void {
    this.store.dispatch(deleteMovie({ id }));
  }
}
