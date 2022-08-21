import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/color/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiURL = "https://localhost:44316/api/colors/getall";
  constructor(private httpClient : HttpClient) { }

  getColors() : Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiURL);
  }

}
