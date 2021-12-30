import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  constructor(  public route:ActivatedRoute, public router:Router) { }
  ngOnInit(): void {
    
  }
  
  isShow: boolean | any;
  topPosToStartShowing = 100;
 
  

  @HostListener('window:scroll')
  checkScroll() {


    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }


  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


}
