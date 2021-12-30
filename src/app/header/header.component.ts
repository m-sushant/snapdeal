import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfiguration } from '../config/app-configuration';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signupForm=new FormGroup({
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z 1-9@$_-]*'),Validators.minLength(6)]),
    mobile: new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    dob: new FormControl()
    
  })
 
  

  ngOnInit(): void {
    this.getSignUpData(this.constSecond);
  }

  getSignUpData(cross:string){
    console.log('getSignUpData');
    if(this.signupForm.valid){
      let data={
        "id":2,
        "email":this.signupForm.value.email,
        "fullname":this.signupForm.value.fullName,
        "number":this.signupForm.value.mobile,
        "dob":this.signupForm.value.dob,
        "password":this.signupForm.value.password
        
      }
      console.log("working")
      this.notify.showSuccess("LoggedIn successfully !!", "Success")
      this.click3 = cross;
      this.httpService.getSignUpData(data).subscribe((Response:any)=>{
        localStorage.setItem('token',Response.token)
        console.log('getSignUpData1',Response);
        setTimeout(
          ()=> {
            this.router.navigate(['/product-page'])
          },1000)
      },(error:any)=>{
        console.log('getSignUpData2',error);
      });
    }
  }


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
  constructor(private appConfig: AppConfiguration, private httpService:UserService,  public route:ActivatedRoute, public router:Router,private notify:NotificationService) {
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
  click2:boolean|any=false;
  clickArea2() {
    this.click2 = !this.click2;
  }

  

  selectedState: string|undefined = "";
  constFirst = "first";
  

  
validateUser(state: string){
  
  this.selectedState = state;}

    click3:string|undefined="";
    constSecond="second";
   
    invisible(cross:string){
      this.click3 = cross;
    }
}
