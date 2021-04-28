import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseUrl = 'http://localhost:8080/api/';
  
  
 
  constructor(private http:HttpClient) { }              
 

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'saveStudent', student);
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'getAllStudent');
  }

  
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}deletestudent/${id}`, { responseType: 'text' });
  }


  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}updateStudent/${id}`, value);
  }
  getStudent(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}getStudent/${id}`);
  }

  }                                        





 