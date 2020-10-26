import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Cast } from '../../interfaces/credits-details';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styles: [
  ]
})
export class CastComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 15,
      freeMode: true,
      loop: true,
      navigation: {

        nextEl: '.swiper-button-next',

        prevEl: '.swiper-button-prev'

      }
    });
  }

}
