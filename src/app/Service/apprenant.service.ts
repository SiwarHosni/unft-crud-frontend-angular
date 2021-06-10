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

  createApprenant(apprenant: Apprenant){
    return this.http.post<any>(this.baseURL, apprenant);
  }

  getApprenantById(id: number): Observable<Apprenant>{
    return this.http.get<Apprenant>(`${this.baseURL}/${id}`);
  }

  updateApprenant(id: number, apprenant: Apprenant): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, apprenant);
  }

  deleteApprenant(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
