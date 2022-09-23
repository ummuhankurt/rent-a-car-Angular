import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetailDto/cardetail';

@Pipe({
  name: 'selectedColorPipe'
})
export class SelectedColorPipePipe implements PipeTransform {

  transform(value: CarDetail[], selectedColor : CarDetail): CarDetail[] {
    return selectedColor?value.filter((c : CarDetail) => c.color.indexOf(selectedColor.color) !== -1) : value;
  }

}
