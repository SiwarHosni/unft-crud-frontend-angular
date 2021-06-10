import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Centform } from '../centform';

@Injectable({
  providedIn: 'root'
})
export class CentformService {

  private baseURL = "http://localhost:8081/api/cformations";



  constructor(private http: HttpClient) { }

  getallCentform(): Observable<Centform[]>{
    return this.http.get<Centform[]>(`${this.baseURL}`);
  }

  createCentform(centform: Centform){
    return this.http.post<any>(this.baseURL, centform);
  }

  getCentformById(id: number): Observable<Centform>{
    return this.http.get<Centform>(`${this.baseURL}/${id}`);
  }

  updateCentform(id: number, centform: Centform): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, centform);
  }

  deleteCentform(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
