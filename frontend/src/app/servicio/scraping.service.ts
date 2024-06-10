import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proximos} from '../modelos/proximos';

@Injectable({
  providedIn: 'root'
})

export class ScrapingService {
  private jsonUrl = 'assets/juegosData.json';

  constructor(private http: HttpClient) {}

  getJuegos(): Observable<Proximos[]> {
    return this.http.get<Proximos[]>(this.jsonUrl);
  }
}
