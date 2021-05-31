import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Beneficiaire } from '../beneficiaire';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {

  private baseURL = "http://localhost:8081/api/beneficiaires";



  constructor(private http: HttpClient) { }

  getallbeneficiaire(): Observable<Beneficiaire[]>{
    return this.http.get<Beneficiaire[]>(`${this.baseURL}`);
  }

  createBeneficiaire(beneficiaire: Beneficiaire): Observable<Object>{
    return this.http.post(this.baseURL, beneficiaire);
  }

  getBeneficiaireById(id: number): Observable<Beneficiaire>{
    return this.http.get<Beneficiaire>(this.baseURL+ id);
  }

  updateBeneficiaire(id: number, beneficiaire: Beneficiaire): Observable<Object>{
    return this.http.put(this.baseURL, beneficiaire);
  }

  deleteBeneficiaire(id: number): Observable<Object>{
    return this.http.delete(this.baseURL+id);
  }

}
