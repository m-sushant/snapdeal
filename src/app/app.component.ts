import {Component,HostListener, ElementRef} from '@angular/core';
import {AppConfiguration} from './config/app-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any = 'file-configuration-example';
  logo:any;
  tagline:any;
  impact:any;
  download:any;
  gift:any;
  help:any;
  sell:any;
  downloadicon:any;
  searchicon:any;
  carticon:any;
  accounticon:any;
  searchtxt:any;
  constructor(private appConfig: AppConfiguration) {
    this.title = appConfig.title;
    this.logo=appConfig.logo;
    this.tagline=appConfig.tagline;
    this.impact=appConfig.impact;
    this.download=appConfig.download;
    this.gift=appConfig.gift;
    this.help=appConfig.help;
    this.sell=appConfig.sell;
    this.downloadicon=appConfig.downloadicon
    this.searchicon=appConfig.searchicon;
    this.carticon=appConfig.carticon;
    this.accounticon=appConfig.accounticon;
    this.searchtxt=appConfig.searchtxt;
    console.log(appConfig.title);
    console.log(appConfig.baseUrl);
  }
  hover:boolean=false;
  hoverArea(){
    this.hover=!this.hover;
    }
    isShow: boolean|any;
    topPosToStartShowing = 100;
  
    @HostListener('window:scroll')
    checkScroll() {
        
      // window의 scroll top
      // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
  
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      console.log('[scroll]', scrollPosition);
      
      if (scrollPosition >= this.topPosToStartShowing) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  
    // TODO: Cross browsing
    gotoTop() {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  
  
}

