import { Component, OnInit } from '@angular/core';
import { Puntuacion } from '../modelos/puntuacion';
import { PuntuacionService } from '../servicio/puntuacion.service';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.scss']
})
export class DbComponent implements OnInit {
  puntuaciones: Puntuacion[] = [];
  ultimasPuntuaciones: Puntuacion[] = [];
  selectedPuntuacion: Puntuacion = { id: 0, nombre: '', puntuacion: 0, nombreJuego: '' };

  constructor(private puntuacionService: PuntuacionService) {}

  ngOnInit() {
    this.loadPuntuaciones();
  }

  loadPuntuaciones() {
    this.puntuacionService.getPuntuaciones().subscribe(data => {
      this.puntuaciones = data;
      this.ultimasPuntuaciones = this.puntuaciones.slice(0, 10);
    });
  }

  savePuntuacion() {
    const saveOrUpdate$ = this.selectedPuntuacion.id
      ? this.puntuacionService.updatePuntuacion(this.selectedPuntuacion)
      : this.puntuacionService.addPuntuacion(this.selectedPuntuacion);

    saveOrUpdate$.subscribe(() => {
      this.loadPuntuaciones(); 
      this.resetForm(); 
    });
  }

  resetForm() {
    this.selectedPuntuacion = { id: 0, nombre: '', puntuacion: 0, nombreJuego: '' };
  }

  selectPuntuacion(puntuacion: Puntuacion) {
    this.selectedPuntuacion = { ...puntuacion }; 
  }
}
