import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Payment } from 'src/app/models/payment/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = "https://localhost:44316/api/payments/add";
  constructor(private httpClient : HttpClient) { }
  
  getPayment(data : Payment) : Observable<ListResponseModel<Payment>>{
    return this.httpClient.post<ListResponseModel<Payment>>(this.apiUrl,data);
  }

}
