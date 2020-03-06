import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../store/models/movie.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {
  @Input() movies: IMovie[];
  @Output() deleteMovieEmitter: EventEmitter<number> = new EventEmitter();
}
