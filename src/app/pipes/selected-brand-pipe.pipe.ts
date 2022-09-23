import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetailDto/cardetail';

@Pipe({
  name: 'selectedBrandPipe'
})
export class SelectedBrandPipePipe implements PipeTransform {

  transform(value: CarDetail[], selectedBrand: CarDetail): CarDetail[] {
    return selectedBrand?value.filter((b : CarDetail) => b.brand.indexOf(selectedBrand.brand) !== -1) : value;
  }

}
