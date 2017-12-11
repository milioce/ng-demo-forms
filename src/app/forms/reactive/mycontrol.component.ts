import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-mycontrol',
  template: `
  <div class="form-group">
    <label>{{ label }}</label>
    <select noNgModel name="mySelect"
      (change)="onChange($event.target.value)"
      (blur)="onTouched()"
      [disabled]="disabled"
      class="form-control">
      <option value="">Select an option</option>
      <option *ngFor="let option of options" [value]="option.value" [selected]="defaultOption == option.value">{{ option.text }}</option>
    </select>
</div>

  `,
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyControlComponent),
      multi: true,
  }]
})

export class MyControlComponent implements ControlValueAccessor {
  @Input() options: {value: any, text: string}[];
  @Input() label: string;

  defaultOption: string = null;
  disabled = false;
  onChange = (_: any) => {};
  onTouched = () => {};

  constructor() { }

  writeValue(value: any): void {
    this.defaultOption = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
