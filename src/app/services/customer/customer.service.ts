import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../../models/customer/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiURL = "https://localhost:44316/api/customers/getcustomerdetails";
  constructor(private httpClient : HttpClient) { }

  getCustomers(): Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiURL);
  }
}
