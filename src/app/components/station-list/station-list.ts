import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Gasolinera } from '../../models/station';
import { Filtros, TIPO_TO_FUEL_LABEL } from '../../models/filter';

@Component({
  selector: 'app-station-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station-list.html',
  styleUrl: './station-list.scss',
})
export class StationList {
  @Input() stations: Gasolinera[] = [];
  @Input() filters!: Filtros;

  get selectedFuelLabel(): string | null {
    if (!this.filters) return null;
    return TIPO_TO_FUEL_LABEL[this.filters.tipoCombustible];
  }
}
