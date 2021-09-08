import {
    Component,
    NgModule,
    Input,
    OnInit
} from '@angular/core';
import {CommonModule} from "@angular/common";
import { SharedModule } from '../shared/shared.module';

@Component({
    selector: 'fds-progress',
    templateUrl: './progress.html'
})

export class ProgressComponent implements OnInit {
    @Input() min = 0;
  
    @Input() max = 100;
  
    @Input() value = 0;
  
    @Input() showLabel = false;
  
    @Input() displayWith: (value: number) => string | number;
  
    constructor() {}
  
    ngOnInit(): void {}
  
    _getWidth() {
      const widthPercent = Math.floor(
        ((this.value - this.min) / (this.max - this.min)) * 100
      );
      return Math.min(100, Math.max(0, widthPercent));
    }
  
    _getLabelStyle() {
      // Label should not go out of boundaries, add compensation for min/max values
      if (this.value == this.min) {
        return { transform: 'none' };
      } else if (this.value == this.max) {
        return { transform: 'translateX(-100%)' };
      }
      return {};
    }
  
    formatValue(value) {
      if (this.displayWith) {
        return this.displayWith(value);
      }
      return value || 0;
    }
  }
@NgModule({
    declarations: [
        ProgressComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        ProgressComponent
    ],
})
export class ProgressModule{}