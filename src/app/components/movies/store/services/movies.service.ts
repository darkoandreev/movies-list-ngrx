import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../models/movie.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MovieService {
    constructor(private http: HttpClient) { }
    
    public get(): Observable<IMovie[]> {
        return this.http.get<IMovie[]>(`${environment.API_URL}movies`);
    }

    public add(movie: IMovie): Observable<IMovie> {
        return this.http.post<IMovie>(`${environment.API_URL}movies`, movie);
    }

    public delete(id: number): Observable<IMovie> {
        return this.http.delete<IMovie>(`${environment.API_URL}movies/${id}`);
    }

    public edit(movie: IMovie): Observable<IMovie> {
        return this.http.put<IMovie>(`${environment.API_URL}movies/${movie.id}`, movie);
    }
}