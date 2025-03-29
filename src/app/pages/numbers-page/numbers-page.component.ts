import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.component.html',
  styles: ``
})
export class NumbersPageComponent {

  totalVenta = signal<number>(2_457_618.5567);
  porcentaje = signal<number>(0.4856);

}
