import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../interfaces/Noticias';
import { Clubes } from '../interfaces/Clubes';
import { environment } from 'src/environment/environment';
import { Doc } from '../interfaces/Clubes';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private API_URL = environment.localUrl //local
  private API_URL = environment.baseUrl; //server
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getClubes(): Observable<Clubes> {
    return this.http.get<Clubes>(this.API_URL + 'clubes');
  }

  getClubById(id: string): Observable<Doc> {
    return this.http.get<Doc>(this.API_URL + 'clubes/' + id);
  }

  getMaestros(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'maestros');
  }

  getMaestroById(id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + 'maestros/' + id);
  }

  getMaterias(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'materias');
  }

  getNoticias(): Observable<Noticias> {
    return this.http.get<Noticias>(this.API_URL + 'noticias');
  }
}
