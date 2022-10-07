import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/login/loginModel';
import { RegisterModel } from 'src/app/models/register/registerModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/token/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = "https://localhost:44316/api/auth/"

  constructor(private httpclient : HttpClient) { }

  login(user : LoginModel){
    return this.httpclient.post<SingleResponseModel<TokenModel>>(this.apiURL + "login" , user) // Bana bir token model gelecek,onun dışında gelen response, responseModeli'de içersin.
  }

  register(user : RegisterModel){
    return this.httpclient.post<SingleResponseModel<TokenModel>>(this.apiURL + "register",user);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
