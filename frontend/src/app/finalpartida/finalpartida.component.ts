import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DbService } from '../servicio/db.service';

@Component({
  selector: 'app-finalpartida',
  templateUrl: './finalpartida.component.html',
  styleUrl: './finalpartida.component.scss'
})
export class FinalpartidaComponent {

  @Input() puntos: number | undefined;

  newPuntuacion = { nombre: '', puntos: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private DbService: DbService) {
  }

  puntuaciones: any[] = [];
  botonDeshabilitado = false; 

  volver() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
        });
  }

  getPuntuaciones(): void {
    this.DbService.getPuntuaciones()
      .subscribe(puntuaciones => {
        this.puntuaciones = puntuaciones
          .sort((a, b) => b.puntuacion - a.puntuacion)
          .slice(0, 5); // Limita a las 5 mejores puntuaciones
      });
  }
  
  

  onSubmit(): void {
    this.botonDeshabilitado = true; 
    if (this.puntos !== undefined) {
      this.newPuntuacion.puntos = this.puntos;
    }
    this.DbService.addPuntuacion(this.newPuntuacion)
      .subscribe(() => {
        this.newPuntuacion = { nombre: '', puntos: 0 };
        this.getPuntuaciones();
        // Considera agregar un retraso aquí si quieres que el botón permanezca oculto/deshabilitado por más tiempo
        this.botonDeshabilitado = false; 
      });
  }
  
  

eliminarPuntuacion(id: number): void {
  this.DbService.deletePuntuacion(id)
    .subscribe(() => {
      this.getPuntuaciones();
    });
}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.puntos = +params['puntos']; 
    });
  }
}
