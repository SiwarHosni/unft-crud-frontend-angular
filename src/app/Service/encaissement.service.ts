import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encaissement } from '../encaissement';

@Injectable({
  providedIn: 'root'
})
export class EncaissementService {

  private baseURL = "http://localhost:8081/api/encaissements";



  constructor(private http: HttpClient) { }

  getallEncaissement(): Observable<Encaissement[]>{
    return this.http.get<Encaissement[]>(`${this.baseURL}`);
  }

  createEncaissement(encaissement: Encaissement): Observable<Object>{
    return this.http.post(this.baseURL, encaissement);
  }

  getEncaissementById(id: number): Observable<Encaissement>{
    return this.http.get<Encaissement>(this.baseURL+ id);
  }

  updateEncaissement(id: number, encaissement: Encaissement): Observable<Object>{
    return this.http.put(this.baseURL,  encaissement);
  }

  deleteEncaissement(id: number): Observable<Object>{
    return this.http.delete(this.baseURL+id);
  }

}
