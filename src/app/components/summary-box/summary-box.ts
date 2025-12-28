import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Gasolinera } from '../../models/station';
import { Filtros, TIPO_TO_FUEL_LABEL } from '../../models/filter';

@Component({
  selector: 'app-summary-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-box.html',
  styleUrl: './summary-box.scss',
})
export class SummaryBox {
  @Input() stations: Gasolinera[] = [];
  @Input() filters!: Filtros;

  get total(): number {
    return this.stations?.length ?? 0;
  }

  get selectedFuelLabel(): string | null {
    if (!this.filters) return null;
    return TIPO_TO_FUEL_LABEL[this.filters.tipoCombustible];
  }

  // Mantengo "nearest" porque tu HTML lo usa
  get nearest(): Gasolinera | null {
    if (!this.stations?.length) return null;
    return [...this.stations].sort(
      (a, b) => (a.distanceKm ?? Number.POSITIVE_INFINITY) - (b.distanceKm ?? Number.POSITIVE_INFINITY)
    )[0] ?? null;
  }

  get cheapestInRadius(): Gasolinera | null {
    if (!this.stations?.length) return null;

    const fuel = this.selectedFuelLabel;
    if (!fuel) return null;

    return [...this.stations].sort(
      (a, b) => (a.precios?.[fuel] ?? Number.POSITIVE_INFINITY) - (b.precios?.[fuel] ?? Number.POSITIVE_INFINITY)
    )[0] ?? null;
  }
}
