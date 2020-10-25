import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMovie(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }

}
