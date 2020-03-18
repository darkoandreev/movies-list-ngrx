import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MatListModule } from '@angular/material/list';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/effects/movies.effects';
import { StoreModule } from '@ngrx/store';
import { moviesFeatureName, moviesReducerMap } from './store/reducers';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesComponent, MoviesListComponent, MovieAddComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MoviesRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(moviesFeatureName, moviesReducerMap),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MoviesModule { }
