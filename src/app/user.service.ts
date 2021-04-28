import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:String="http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  requestData(
    type: string,
    api: string,
    body: any = '',
    apiType?
  ): Observable<any> {
    if (type == 'post') {
        return this.httpClient.post(this.baseUrl + api, body).pipe(catchError(this.handleError));;
      } else if (type == 'put') {
        return this.httpClient.put(this.baseUrl + api, body);
      } 
    return;
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}