import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() array: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      navigation: {

        nextEl: '.swiper-button-next',

        prevEl: '.swiper-button-prev'

      }
    });
  }

}
