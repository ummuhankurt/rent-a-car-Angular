import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/Car/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

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

  getCarById(id : number) : Observable<SingleResponseModel<Car>>{
    return this.httpClient.get<SingleResponseModel<Car>>(this.apiUrl + "getbyid?id=" + id)
  }
}
