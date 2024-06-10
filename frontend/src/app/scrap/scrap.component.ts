import { Component, OnInit } from '@angular/core';
import { ScrapingService } from '../servicio/scraping.service';
import { Proximos } from '../modelos/proximos';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.scss']
})

export class ScrapComponent implements OnInit {
  juegos: Proximos[] = [];

  constructor(private ScrapingService: ScrapingService) {}

  ngOnInit(): void {
    this.ScrapingService.getJuegos().subscribe((data: Proximos[]) => {
      this.juegos = data;
    });
  }
}
