import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JsonAppConfigService } from './config/json-app-config.service';
import {AppConfiguration} from './config/app-configuration';
import { AppRoutingModule } from './app-routing.module';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FilterPipe } from './pipes/filter.pipe';
import { GlobalStateService } from './services/global-state.service';
import { HeaderComponent } from './header/header.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { TooltipDirective } from './tooltip.directive';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProductsComponent } from './products/products.component';
import { ProductsResolverService } from './services/products-resolver.service';
import { RecentproductsComponent } from './recentproducts/recentproducts.component';



export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    FooterComponent,
    FilterPipe,
    HeaderComponent,
    ScrollerComponent,TooltipDirective, ProductsComponent, RecentproductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: AppConfiguration,
      deps: [HttpClient],
      useExisting: JsonAppConfigService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn
    },
    UserService,AuthGuard,NotificationService,GlobalStateService,ProductsResolverService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
