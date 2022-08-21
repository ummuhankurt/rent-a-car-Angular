import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from 'src/app/models/rentalDetailDto/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {
  apiUrl = "https://localhost:44316/api/rentals/getrentaldetalis";
  constructor(private httpClient : HttpClient) { }

  getRentalDetails():Observable<RentalDetailResponseModel>{
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl);
  }
}
