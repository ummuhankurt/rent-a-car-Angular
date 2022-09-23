import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorAndBrandDto } from 'src/app/models/carDetailbyColorAndBrand/ColorAndBrandDto';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandAndColorServiceService {

  apiUrl = "https://localhost:44316/api/";

  constructor(private httpClient : HttpClient) { }

  getDetalisByBrandAndColor(colorName : string,brandName : string) : Observable<ListResponseModel<CarDetail>>{
    console.log("Tıklanan renk : " + colorName);
    console.log("Tıklanan marka : " + brandName)
    let newPath = this.apiUrl + "cars/getbycolorandbrand?ColorName=" + colorName + "&BrandName=" + brandName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

  }
  
}
