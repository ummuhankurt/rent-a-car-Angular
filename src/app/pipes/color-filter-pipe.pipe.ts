import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetailDto/cardetail';

@Pipe({
  name: 'colorFilterPipe'
})
export class ColorFilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterColorText: string): CarDetail[] {
    filterColorText = filterColorText?filterColorText.toLocaleLowerCase():""
    return filterColorText?value.filter((c : CarDetail) => c.color.toLocaleLowerCase().indexOf(filterColorText) !== -1) : value;
  }
} 
