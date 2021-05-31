import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apprenant } from '../apprenant';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  private baseURL = "http://localhost:8081/api/apprenants";



  constructor(private http: HttpClient) { }

  getallApprenant(): Observable<Apprenant[]>{
    return this.http.get<Apprenant[]>(`${this.baseURL}`);
  }

  createApprenant(Apprenant: Apprenant): Observable<Object>{
    return this.http.post(`${this.baseURL}`, Apprenant);
  }

  getApprenantById(id: number): Observable<Apprenant>{
    return this.http.get<Apprenant>(`${this.baseURL}/${id}`);
  }

  updateApprenant(id: number, Apprenant: Apprenant): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, Apprenant);
  }

  deleteApprenant(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
