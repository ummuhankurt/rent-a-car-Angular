import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/Car/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44316/api/cars/";

  constructor(private httpClient : HttpClient) { }

  addCar(car : Car) : Observable<ListResponseModel<Car>>{
    return this.httpClient.post<ListResponseModel<Car>>(this.apiUrl + "add",car);
  }

  updateCar(car : Car) : Observable<ListResponseModel<Car>>{
    return this.httpClient.post<ListResponseModel<Car>>(this.apiUrl + "update",car);
  }
}
