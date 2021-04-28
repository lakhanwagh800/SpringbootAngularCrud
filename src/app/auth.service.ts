import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrls:string="http://localhost:8080/api/login";

  constructor(private http:HttpClient){}

  logIn(data):Observable<any>{
  return this.http.post(this._baseUrls,data)
}
getToken(){
  return localStorage.getItem('token')
}
loggedIn(){
  console.log(localStorage.getItem('token'));
  return !!localStorage.getItem('token')
}
}
