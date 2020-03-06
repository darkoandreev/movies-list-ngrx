import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IMovie } from '../store/models/movie.interface';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieAddComponent {
  movieForm = new FormGroup({
    name: new FormControl(''),
    genre: new FormControl(''),
    duration: new FormControl(''),
    rating: new FormControl('')
  });

  @Output() movieSubmit: EventEmitter<IMovie> = new EventEmitter();

  onSubmit(): void {
    const movie = this.movieForm.value as IMovie;
    this.movieSubmit.emit(movie);
  }

}
