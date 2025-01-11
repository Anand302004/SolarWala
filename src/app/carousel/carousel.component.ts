import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }

  activeSlides!: SlidesOutputData;

  slidesStore: any = [
    {
      id: 1, src: "assets/priti-img/solarcomer.jpg",
      heading1: 'All types of Solar Projects & Maintenance', btn1: 'Read More', btn2: 'Join Now', heading2: 'Solar Panel Cleaning', heading3: "India's top most solar sales & maintenance company",pt:"/product/solarcleaning"
    },
    { id: 2, src: "assets/img/dj1.jpg",
      heading1: 'Available for world', btn1: 'Read More', btn2: 'Join Now', heading2: 'Solar Lights', heading3: 'Now it is easy to do solar installation in the world of solar.', pt:"/product/solarlight"
    },
    {
      id: 3, src: "assets/img/utl2.jpg",
      heading1: 'All types of Solar Projects & Maintenance', btn1: 'Read More', btn2: 'Join Now', heading2: 'UTL String ', heading3: "India's top most solar sales & maintenance company",pt:"/product/utl"
    },
    { id: 4, src: "assets/priti-img/setup2.jpg",
      heading1: 'Available for world', btn1: 'Read More', btn2: 'Join Now', heading2: 'MC4 Connector', heading3: 'Now it is easy to do solar installation in the world of solar.', pt:"/product/mc4connector"
    }
  ];
  constructor() { }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

}
