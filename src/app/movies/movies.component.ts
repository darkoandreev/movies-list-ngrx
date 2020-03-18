import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './store/models/movie.interface';
import { Store, select } from '@ngrx/store';
import { IState } from './store/reducers';
import { getMoviesList } from './store/selectors';
import { getMovies, addMovie, deleteMovie, editMovie } from './store/actions/movies-list.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$: Observable<IMovie[]> = this.store.pipe(select(getMoviesList))
  movie: IMovie;
  constructor(private store: Store<IState>) { }

  ngOnInit() {
    this.store.dispatch(getMovies());
  }

  onSubmit(movie: IMovie): void {
    this.store.dispatch(this.movie ? editMovie({ movie }) : addMovie({ movie }));
  }

  deleteMovie(id: number): void {
    this.store.dispatch(deleteMovie({ id }));
  }
}
