import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  results: Movie[] = [];
  searchKey = '';

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.searchKey = params.text;
      this.movieService.searchMovie(params.text).subscribe( movies => this.results = movies.results );
    });
  }

}
