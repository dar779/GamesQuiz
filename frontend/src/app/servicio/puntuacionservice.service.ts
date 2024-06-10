// src/app/services/puntuacion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntuacion } from '../modelos/puntuacion'; 

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  private apiUrl = 'http://localhost:5438/api/puntuaciones'; 

  constructor(private http: HttpClient) {}

  getPuntuaciones(): Observable<Puntuacion[]> {
    return this.http.get<Puntuacion[]>(this.apiUrl);
  }

  addPuntuacion(puntuacion: Puntuacion): Observable<Puntuacion> {
    return this.http.post<Puntuacion>(this.apiUrl, puntuacion);
  }

  updatePuntuacion(puntuacion: Puntuacion): Observable<Puntuacion> {
    return this.http.put<Puntuacion>(`${this.apiUrl}/${puntuacion.id}`, puntuacion);
  }
}
