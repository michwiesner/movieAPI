import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movie-details';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-details';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
  .card {
    background-color: transparent !important;
  }
  `]
})
export class MovieComponent implements OnInit {

  movie: MovieDetails;
  cast: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.movieService.getMovieDetails(id),
      this.movieService.getCrew(id)
    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
      this.cast = cast;
    });
  }

  goBack() {
    this.location.back();
  }

}
