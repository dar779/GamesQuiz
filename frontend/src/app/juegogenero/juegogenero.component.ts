import { Component, inject, OnInit } from '@angular/core';
import { Juego } from '../modelos/juego';
import { ApiService } from '../servicio/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegogenero',
  templateUrl: './juegogenero.component.html',
  styleUrl: './juegogenero.component.scss'
})
export class JuegogeneroComponent {
  public juegoVerdadero: Juego = {id: 1, title: "", thumbnail: "", short_description: "", game_url: "", genre: "", platform: "", publisher: "", developer: "", release_date: "", profile_url: ""};
  public juegoFalso1: Juego = {id: 1, title: "", thumbnail: "", short_description: "", game_url: "", genre: "", platform: "", publisher: "", developer: "", release_date: "", profile_url: ""};
  public juegoFalso2: Juego = {id: 1, title: "", thumbnail: "", short_description: "", game_url: "", genre: "", platform: "", publisher: "", developer: "", release_date: "", profile_url: ""};
  public juegoFalso3: Juego = {id: 1, title: "", thumbnail: "", short_description: "", game_url: "", genre: "", platform: "", publisher: "", developer: "", release_date: "", profile_url: ""};

  constructor(private apiservice: ApiService, private router: Router) {}

  public juegos: Juego[] = [];
  public puntos: number = 0;
  public vidas: number = 3;
  public acierto: boolean = false;
  public fallo: boolean = false;

  ngOnInit() {
    this.nuevaPregunta();
  }

  mezclarOpciones(): void {
    for (let i = this.juegos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.juegos[i], this.juegos[j]] = [this.juegos[j], this.juegos[i]];
    }
  }

  juegoRecibido(juego: Juego, esVerdadero: boolean) {
    if (esVerdadero) {
      this.juegoVerdadero = juego;
    } else {
      if (juego && juego.title) {
        this.juegos.push(juego);
      }
    }
    if (this.juegos.length === 3) {
      this.juegos.unshift(this.juegoVerdadero);
      this.mezclarOpciones();
    }
  }

  verificarRespuesta(juegoSeleccionado: Juego): void {
    if (juegoSeleccionado.release_date === this.juegoVerdadero.release_date) {
      this.puntos += 10; 
      this.acierto = true;
      setTimeout(() => {
        this.acierto = false;
        this.nuevaPregunta();
      }, 1000)
      
    }
    else{
      this.vidas -= 1;
      this.fallo = true;
      setTimeout(() => {
        this.fallo = false;
        this.nuevaPregunta();
        if(this.vidas === 0){
          this.router.navigate(['/finalpartida/', this.puntos]);
          }
      }, 1000)
    }
  }

  nuevaPregunta() {
    this.juegos = [];
    this.apiservice.getJuego().subscribe(juego => this.juegoRecibido(juego, true), error => console.error('Error al obtener el juego:', error));
    for (let i = 0; i < 3; i++) {
      this.apiservice.getJuego().subscribe(juego => this.juegoRecibido(juego, false), error => console.error('Error al obtener el juego:', error));
    }
    // Filtrar juegos vacíos después de recibir todos los juegos
    this.juegos = this.juegos.filter(juego => juego && juego.title);
  }
}