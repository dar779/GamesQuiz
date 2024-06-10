import { Injectable } from "@angular/core";
import { Juego } from "../modelos/juego";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private juegosSubject = new BehaviorSubject<Juego[]>([]);
  public juegos$ = this.juegosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadGames();
  }

  private loadGames(): void {
    //const gamesUrl = 'https://www.mmobomb.com/api1/games';
    const gamesUrl = 'assets/games.json';
    this.http.get<Juego[]>(gamesUrl).subscribe({
      next: (gamesArray) => {
        this.juegosSubject.next(gamesArray);
      },
      error: (err) => {
        console.error('Error al cargar la información de los juegos:', err);
      }
    });
  }

  public getValid(): Observable<Juego[]> {
    return this.juegos$;
  }

  public getJuego(): Observable<Juego> {
    return this.juegos$.pipe(
      map(juegos => {
        const randomIndex = Math.floor(Math.random() * juegos.length);
        return juegos[randomIndex];
      })
    );
  }
}
