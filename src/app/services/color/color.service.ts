import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Color } from 'src/app/models/color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiURL = "https://localhost:44316/api/colors";
  constructor(private httpClient : HttpClient) { }

  getColors() : Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiURL + "/getall");
  }
  addColors(data : Color) : Observable<ListResponseModel<Color>>{
    return this.httpClient.post<ListResponseModel<Color>>(this.apiURL + "/add" , data)
  }
  getColorById(id : number) : Observable<SingleResponseModel<Color>>{
    let newPath = this.apiURL + "/getbyid?id="
    return this.httpClient.get<SingleResponseModel<Color>>(newPath + id)
  }
  update(color : Color) : Observable<ResponseModel> {
    let newPath = this.apiURL + "/update";
    return this.httpClient.post<ResponseModel>(newPath , color);
  }
}
