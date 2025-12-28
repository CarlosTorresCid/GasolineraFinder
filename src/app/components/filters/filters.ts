import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Filtros, TipoCombustible, OrdenarPor } from '../../models/filter';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export class Filters {
  @Output() filterChange = new EventEmitter<Filtros>();

  tipoCombustible: TipoCombustible = 'todos';
  distanciaMaxima = 5;
  precioMaximo = 0;

  soloAbiertas = false;
  ordenarPor: OrdenarPor = 'precio';

  empresasText = '';

  emitFilters(): void {
    const empresas = this.empresasText
      .split(',')
      .map((e) => e.trim())
      .filter((e) => e.length > 0);

    this.filterChange.emit({
      tipoCombustible: this.tipoCombustible,
      distanciaMaxima: Number(this.distanciaMaxima) || 0,
      precioMaximo: Number(this.precioMaximo) || 0,
      soloAbiertas: this.soloAbiertas,
      ordenarPor: this.ordenarPor,
      empresas,
    });
  }
}
