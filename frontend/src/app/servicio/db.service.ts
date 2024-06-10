import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private puntuacionesUrl = 'http://localhost:3000/puntuaciones'; // URL a la API

  constructor(private http: HttpClient) { }

  // Método GET para obtener las 5 mejores puntuaciones
  getPuntuaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.puntuacionesUrl}?_sort=puntuacion&_order=desc`);
  }

  // Método DELETE para eliminar una puntuación específica por su ID
  deletePuntuacion(id: number): Observable<any> {
    const url = `${this.puntuacionesUrl}/${id}`;
    return this.http.delete(url);
  }

  // Método POST para insertar una nueva puntuación
  addPuntuacion(puntuacion: { nombre: string; puntos: number }): Observable<any> {
    const nuevaPuntuacion = {
      nombre: puntuacion.nombre,
      puntuacion: puntuacion.puntos 
    };
    return this.http.post(this.puntuacionesUrl, nuevaPuntuacion);
  }
}
