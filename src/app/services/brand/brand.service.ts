import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { BrandResponseModel } from 'src/app/models/brand/BrandResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { ResponseModel } from 'src/app/models/ResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44316/api/brands";
  constructor(private httpClient : HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl + "/getall");
  }

  addBrand(brand : Brand): Observable<ListResponseModel<Brand>>{
    return this.httpClient.post<ListResponseModel<Brand>>(this.apiUrl + "/add", brand);
  }

  getBrandById(id : number) : Observable<SingleResponseModel<Brand>>{
    let newPath = this.apiUrl + "/getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  updateBrand(brand : Brand) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "/update";
    return this.httpClient.post<ResponseModel>(newPath , brand);
  }
}
