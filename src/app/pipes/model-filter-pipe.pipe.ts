import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetailDto/cardetail';

@Pipe({
  name: 'modelFilterPipe'
})
export class ModelFilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterModelText : string): CarDetail[] {
    filterModelText = filterModelText?filterModelText.toLocaleLowerCase():"";
    return filterModelText?value.filter((c : CarDetail) => c.name.toLocaleLowerCase().indexOf(filterModelText) !== -1) : value;
  }

}
