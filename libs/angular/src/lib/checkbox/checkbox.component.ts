import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl
} from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'fds-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CHECKBOX_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() value: any;

  @Input() name: string;

  @Input() disabled: boolean;

  @Input() binary: boolean;

  @Input() label: string;

  @Input() ariaLabelledBy: string;

  @Input() tabindex: number;

  @Input() inputId: string;

  @Input() style: any;

  @Input() styleClass: string;

  @Input() labelStyleClass: string;

  @Input() formControl: FormControl;

  @Input() checkboxIcon: string = '';

  @Input() readonly: boolean;

  @Input() required: boolean;

  @ViewChild('cb') inputViewChild: ElementRef;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  model: any;

  onModelChange: Function = () => {};

  onModelTouched: Function = () => {};

  focused: boolean = false;

  checked: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  onClick(event, checkbox, focus: boolean) {
    event.preventDefault();

    if (this.disabled || this.readonly) {
      return;
    }

    this.checked = !this.checked;
    this.updateModel(event);

    if (focus) {
      checkbox.focus();
    }
  }

  updateModel(event) {
    if (!this.binary) {
      if (this.checked) this.addValue();
      else this.removeValue();

      this.onModelChange(this.model);

      if (this.formControl) {
        this.formControl.setValue(this.model);
      }
    } else {
      this.onModelChange(this.checked);
    }

    this.onChange.emit({ checked: this.checked, originalEvent: event });
  }

  handleChange(event) {
    if (!this.readonly) {
      this.checked = event.target.checked;
      this.updateModel(event);
    }
  }

  isChecked(): boolean {
    if (this.binary) return this.model;
    else return this.model && this.model.indexOf(this.value) > -1;
  }

  removeValue() {
    this.model = this.model.filter(val => val !== this.value);
  }

  addValue() {
    if (this.model) this.model = [...this.model, this.value];
    else this.model = [this.value];
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  writeValue(model: any): void {
    this.model = model;
    this.checked = this.isChecked();
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
    this.cd.markForCheck();
  }
}
