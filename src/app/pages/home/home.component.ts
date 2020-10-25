import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  results: Movie[] = [];
  resultsSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      if ( this.movieService.loading ) { return; }
      this.movieService.getMovies().subscribe( res => {
        this.results.push(...res.results);
      });
    }

  }

  constructor( private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe( res => {this.resultsSlideshow = res.results; this.results = res.results; });
  }

  ngOnDestroy() {
    this.movieService.resetSlideShow();
  }

}
