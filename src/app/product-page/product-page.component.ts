import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 products:any=[ {
    name: "Lenovo Ideapad Gaming 3 Intel Core i5 10th Gen 15.6 inch FHD Gaming Laptop (8GB/1TB+256GB SSD/Windows 10/MS Office 2019/NVIDIA GTX 1650 4GB Graphics/Onyx Black/2.2Kg), 81Y400E1IN",
    image1: "https://n4.sdlcdn.com/imgs/j/w/g/large/Lenovo-Ideapad-Gaming-3-Intel-SDL258033580-1-71f25.webp",
    image2: "https://n3.sdlcdn.com/imgs/j/w/g/Lenovo-Ideapad-Gaming-3-Intel-SDL258033580-2-57545.jpg",
    price: 107690,
    rating: 4.3,
    discount: 42,
    discription: "Up to 10th Gen Intel Core i7 H-series processor is here to deliver you a gaming experience like never before. 8 GB 2933Mhz DDR4 RAM, expandable up to 16GB, allows you to maintain the perfect balance between demanding games and intense deadlines without any fall back. Highly reliable 1 TB + 256 GB SSD hybrid storage gives you that extra space to keep all your media in one place.",
}];

}
