import {Injectable} from '@angular/core';
import {AppConfiguration} from './app-configuration';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfiguration {
  constructor(private http: HttpClient) {
    super();
  }

  // This function needs to return a promise
  load() {
    return this.http.get<AppConfiguration>('app.config.json')
      .toPromise()
      .then(data => {
        this.title = data.title;
        this.baseUrl = data.baseUrl;
        this.logo=data.logo;
        this.tagline=data.tagline;
        this.impact=data.impact;
        this.download=data.download;
        this.gift=data.gift;
        this.help=data.help;
        this.sell=data.sell;
        this.downloadicon=data.downloadicon;
        this.searchicon=data.searchicon;
        this.carticon=data.carticon;
        this.accounticon=data.accounticon;
        this.searchtxt=data.searchtxt;
      })
      .catch(() => {
        console.error('Could not load configuration');
      });
  }
}
