import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user.interface';

import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'template-forms.component.html'
})

export class TemplateFormsComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  countries = [
    { id: 'es', label: 'Spain' },
    { id: 'fr', label: 'France '},
    { id: 'it', label: 'Italy' }
  ];
  user: User = {
    name: { first: 'Emilio', last: 'Calejero'},
    email: 'emilio@calejero.es',
    postalcode: '50001',
    country: this.countries[0]
  };

  constructor() { }

  ngOnInit() {
    // this.form.statusChanges.subscribe(data => console.log('status change', data, this.form));
    this.form.valueChanges.subscribe(data => console.log('value changes', data, this.form));
  }

  onSubmit(f) {
    console.log(f);
  }

  onReset() {
    this.form.reset(this.user);
  }

  onSetValue() {
    this.form.setValue(this.user);
  }
}
