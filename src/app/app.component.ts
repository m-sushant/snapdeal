import { Component, HostListener, ElementRef } from '@angular/core';
import { AppConfiguration } from './config/app-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = 'file-configuration-example';
  logo: any;
  tagline: any;
  impact: any;
  download: any;
  gift: any;
  help: any;
  sell: any;
  downloadicon: any;
  searchicon: any;
  carticon: any;
  accounticon: any;
  searchtxt: any;
  constructor(private appConfig: AppConfiguration) {
    this.title = appConfig.title;
    this.logo = appConfig.logo;
    this.tagline = appConfig.tagline;
    this.impact = appConfig.impact;
    this.download = appConfig.download;
    this.gift = appConfig.gift;
    this.help = appConfig.help;
    this.sell = appConfig.sell;
    this.downloadicon = appConfig.downloadicon
    this.searchicon = appConfig.searchicon;
    this.carticon = appConfig.carticon;
    this.accounticon = appConfig.accounticon;
    this.searchtxt = appConfig.searchtxt;
    console.log(appConfig.title);
    console.log(appConfig.baseUrl);
  }
  hover: boolean = false;
  hoverArea() {
    this.hover = !this.hover;
  }
  isShow: boolean | any;
  topPosToStartShowing = 100;
 
  click: boolean = false;
  clickArea() {
    this.click = !this.click;
  }
  click1:boolean|any=false;
  clickArea1() {
    this.click1 = !this.click1;
  }

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


validateUser(){
      let signupbox:HTMLElement|any=document.getElementById("signupbox");
      let loginArea:HTMLElement|any=document.getElementById("signup");
      signupbox.style.display="none";
      loginArea.style.display="block";
}

    invisible(){
      let login:HTMLElement|any=document.getElementById("overlay");
      login.style.display="none";
    }
}


