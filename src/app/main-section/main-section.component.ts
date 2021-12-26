import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200px)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200px)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})
export class MainSectionComponent implements OnInit {

  constructor() { }
  selectedState:string="first";
  constFirst="first";
  constSecond="second";
  constThird="third";
  constFourth="fourth";
  constFifth="fifth";

  hoverArea(select:string){
    this.selectedState=select;
  }
  ngOnInit(): void {
    //this.showTrendingProducts(this.products);
  }
  counter: number = 0;
  images = [
    'https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg',
    'https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg',
    'https://n4.sdlcdn.com/imgs/k/a/z/Tshirt_WEB_10dec-dce51.jpg',
    'https://n3.sdlcdn.com/imgs/k/a/z/Formals_WEB_10dec-9934f.jpg',
    'https://n3.sdlcdn.com/imgs/k/a/z/Footwear_Collection_WEB_10dec-fea6a.jpg',
    'https://n1.sdlcdn.com/imgs/k/a/z/Kurtis_WEB_10dec-5787f.jpg',
    'https://n2.sdlcdn.com/imgs/k/a/z/Dresess_WEB_10dec-89750.jpg',
  ];
  onNext() {
    if (this.counter != this.images.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  



}
