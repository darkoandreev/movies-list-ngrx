import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './store/models/movie.interface';
import { MoviesListFacade } from './store/facades/movies-list.facade';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<IMovie[]> = this.moviesListFacade.movies$;

  constructor(public moviesListFacade: MoviesListFacade) { }

  ngOnInit() {
    this.moviesListFacade.getMovies();
  }

  onSubmit(movie: IMovie): void {
    this.moviesListFacade.addMovie(movie);
  }

  deleteMovie(id: number): void {
    this.moviesListFacade.deleteMovie(id);
  }
}
