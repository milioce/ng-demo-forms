import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-list',
  template: `
  <div class="form-group">
    <label>Select an option</label>
    <div class="list-group col-md-5">
      <a *ngFor="let option of options"
         class="list-group-item list-group-item-action"
         [ngClass]="{active: defaultOption == option.value, disable: disabled}"
         (click)="onClick(option.value)">{{ option.text }}</a>
    </div>
  </div>
  `,
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListComponent),
      multi: true,
  }]
})

export class ListComponent implements ControlValueAccessor {
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

  onClick(value: any): void {
    this.onChange(value);
    this.onTouched();
    this.defaultOption = value;
  }
}
