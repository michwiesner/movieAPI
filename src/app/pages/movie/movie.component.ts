import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movie-details';
import { Location } from '@angular/common';

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

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              private location: Location) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.movieService.getMovieDetails(id).subscribe( movie => this.movie = movie );
  }

  goBack() {
    this.location.back();
  }

}
