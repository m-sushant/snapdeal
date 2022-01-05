import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
   
  headerFilter: string|any;

  constructor() { }

  public getFilter(): string {
    return this.headerFilter;
  }

  public setFilter(filter: string): void {
    this.headerFilter = filter;
  }
}
