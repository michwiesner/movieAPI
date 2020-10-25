import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MovieDBResponse } from '../interfaces/movie';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private page = 1;
  public loading: boolean;

  constructor( private http: HttpClient) { }

  get params() {
    return {
      api_key: environment.apikey,
      language: 'en-US',
      page: this.page.toString()
    };
  }

  resetSlideShow() {
    this.page = 1;
  }

  getMovies(): Observable<MovieDBResponse> {
    if (this.loading ) { return; }
    this.loading = true;
    return this.http.get<MovieDBResponse>(`${this.baseUrl}/movie/now_playing`, {params: this.params})
                    .pipe(tap(() => {this.page += 1; this.loading = false; }));
  }

  searchMovie(query): Observable<MovieDBResponse> {
    const params = {...this.params, page: '1', query};
    return this.http.get<MovieDBResponse>(`${this.baseUrl}/search/movie`, { params });
  }
}
