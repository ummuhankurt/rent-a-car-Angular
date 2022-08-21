import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { BrandResponseModel } from 'src/app/models/brand/BrandResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44316/api/brands/getall";
  constructor(private httpClient : HttpClient) { }

  getBrands(): Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
