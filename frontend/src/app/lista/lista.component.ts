import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicio/api.service';
import { Juego } from '../modelos/juego';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  juegos: Juego[] = [];
  ordenActual: keyof Juego = 'id';
  direccionOrden: 'asc' | 'desc' = 'asc'; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getValid().subscribe(juegos => {
      this.juegos = juegos;
      this.ordenarLista(this.ordenActual, this.direccionOrden);
    });
  }

  cambiarOrden(criterio: keyof Juego) {
    if (this.ordenActual === criterio) {
      this.direccionOrden = this.direccionOrden === 'asc' ? 'desc' : 'asc';
    } else {
      this.direccionOrden = 'asc';
    }
    this.ordenActual = criterio;
    this.ordenarLista(criterio, this.direccionOrden);
  }

  ordenarLista(criterio: keyof Juego, direccion: 'asc' | 'desc') {
    this.juegos.sort((a, b) => {
      if (a[criterio] < b[criterio]) {
        return direccion === 'asc' ? -1 : 1;
      }
      if (a[criterio] > b[criterio]) {
        return direccion === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
