import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"


  constructor(private http : HttpClient) { }

  generateToken(credentials:any)
  {
    return this.http.post(`${this.url}/token`,credentials);
  }
  

  loginUser(token: string)
  {
    sessionStorage.setItem("token",token)
    return true;
  }

  isLoggedIn()
  {
    let token = sessionStorage.getItem("token");
    if(token == undefined || token=='' || token==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  logout()
  {
    sessionStorage.removeItem('token');
    return true;
  }

  static getToken()
  {
    return sessionStorage.getItem("token");
  }
}
