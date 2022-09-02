import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44316/api/";
  constructor(private httpClient : HttpClient) { }

  getCarDetails() : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getdetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByBrand(id : number) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbybrand?id=" + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByColor(id : number) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbycolor?id=" + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByCarId(id : number) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbycarid?id=" + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  
}
