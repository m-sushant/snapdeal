import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(searchName:any){
      return searchName.name.toLowerCase().indexOf(searchTerm)> -1
    });
  }

}
