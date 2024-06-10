import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent {
  constructor(private router: Router) {}

  iniciarFechas() {
    this.router.navigate(['/juego']).then(() => {
      window.location.reload();
        });
  }
  iniciarDesarrollador() {
    this.router.navigate(['/juegodesarrollador']).then(() => {
      window.location.reload();
        });
  }
  iniciarGenero() {
    this.router.navigate(['/juegogenero']).then(() => {
      window.location.reload();
        });
  }
  iniciarPortada() {
    this.router.navigate(['/juegoportada']).then(() => {
      window.location.reload();
        });
  }

  lista() {
    this.router.navigate(['/lista']).then(() => {
      window.location.reload();
        });
  }

  scrap() {
    this.router.navigate(['/scrap']).then(() => {
      window.location.reload();
        });
  }

  error() {
    this.router.navigate(['/page404']).then(() => {
      window.location.reload();
        });
  }
}
