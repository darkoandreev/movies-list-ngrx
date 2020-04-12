import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './store/models/movie.interface';
import { MoviesListFacade } from './store/facades/movies-list.facade';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],

})
export class MoviesComponent implements OnInit {
  public movies$: Observable<IMovie[]> = this.moviesListFacade.movies$;

  constructor(public moviesListFacade: MoviesListFacade) { }

  ngOnInit() {
    this.moviesListFacade.get();
  }

  onSubmit(movie: IMovie): void {
    this.moviesListFacade.add(movie);
  }

  delete(id: number): void {
    this.moviesListFacade.delete(id);
  }
}
