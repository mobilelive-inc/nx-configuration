import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'demo-range-slider-currency',
  template: `
    <div>
      <fds-range-slider
        [displayWith]="formatLabel"
        [min]="min"
        [max]='max'
        [(value)]="value"
        [thumbLabel]="true"
        [showMinMaxLabels]="true"
        [step]= "step"
      ></fds-range-slider>
      <pre>
      Value: {{ value }}
    </pre
      >
    </div>
  `,
  styles: []
})
export class RangeSliderCurrencyComponent {
  min = 0;
  max = 2000000;
  step=5000;
  value = 500000;

  constructor(private currencyPipe: CurrencyPipe) {}

  formatLabel = (value): string => {
    return this.currencyPipe.transform(value, 'CAD', 'symbol-narrow', '1.0');
  };
}
