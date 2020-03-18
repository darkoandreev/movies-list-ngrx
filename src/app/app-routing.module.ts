import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
