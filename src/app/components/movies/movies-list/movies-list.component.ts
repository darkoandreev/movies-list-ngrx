import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../store/models/movie.interface';
import { trigger, transition, query, style, stagger, animate, group } from '@angular/animations';
import { movieListAnimation } from './movie-list.animation';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [movieListAnimation.animateList]
})
export class MoviesListComponent {
  @Input() movies: IMovie[];
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() itemClickedEvent: EventEmitter<IMovie> = new EventEmitter();

  deleteItem(event: MouseEvent, id: number): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.deleteEvent.emit(id);
  }
}
