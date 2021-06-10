import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../club';


@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private baseURL = "http://localhost:8081/api/clubs";



  constructor(private http: HttpClient) { }

  getallClub(): Observable<Club[]>{
    return this.http.get<Club[]>(`${this.baseURL}`);
  }

  createApprenant(club: Club){
    return this.http.post<any>(this.baseURL, club);
  }

  getClubById(id: number): Observable<Club>{
    return this.http.get<Club>(`${this.baseURL}/${id}`);
  }

  updateClub(id: number, club: Club): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, club);
  }

  deleteClub(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
