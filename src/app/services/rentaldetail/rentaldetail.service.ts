import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetail } from 'src/app/models/rentalDetailDto/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {
  apiUrl = "https://localhost:44316/api/addrentals/add";
  constructor(private httpClient : HttpClient) { }
  
  getRental(data : RentalDetail) : Observable<ListResponseModel<RentalDetail>>{
    //console.log(data);
    return this.httpClient.post<ListResponseModel<RentalDetail>>(this.apiUrl,data);
  }
} 
