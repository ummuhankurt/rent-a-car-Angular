import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetailDto/cardetail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterBrandText: string): CarDetail[] {
    filterBrandText = filterBrandText? filterBrandText.toLocaleLowerCase() :"";
    return filterBrandText?value.filter((c : CarDetail) => c.brand.toLocaleLowerCase().indexOf(filterBrandText)!==-1) : value;
  }
}
