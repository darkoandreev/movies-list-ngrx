import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IMovie } from '../store/models/movie.interface';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieAddComponent implements OnChanges {
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;

  @Input() movie: IMovie;

  @Output() submitEvent: EventEmitter<IMovie> = new EventEmitter();
  @Output() closeEditModeEvent: EventEmitter<void> = new EventEmitter();

  public movieForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    genre: new FormControl(''),
    duration: new FormControl(''),
    rating: new FormControl('')
  });

  ngOnChanges(changes: SimpleChanges): void {
    if('movie' in changes && changes.movie.currentValue) {
      this.movieForm.setValue(this.movie);
      this.expansionPanel.open();
    }
  }

  onSubmit(): void {
    const movie = this.movieForm.value as IMovie;
    this.submitEvent.emit(movie);
  }

  closeEditMode(): void {
    this.movieForm.reset();
    this.expansionPanel.close();
    this.closeEditModeEvent.emit();
  }
}
