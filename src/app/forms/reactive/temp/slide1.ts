import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../../template/user.interface';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './reactive-forms.component.html'
})

export class ReactiveFormsComponent implements OnInit {
  form: FormGroup;
  countries = [
    { id: 'es', label: 'Spain' },
    { id: 'fr', label: 'France '},
    { id: 'it', label: 'Italy' }
  ];

  user1 = {
    name: 'Emilio Calejero',
    email: 'emilio@calejero.es',
    country: this.countries[1]
  };

  user: User = {
    name: {
      first: 'Emilio',
      last: 'Calejero'
    },
    email: 'emilio@calejero.es',
    country: this.countries[1]
  };

  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value, this.form.valid);
  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormGroup({
        first: new FormControl(this.user.name.first),
        last: new FormControl(this.user.name.last),
      }),
      email: new FormControl(this.user.email),
      country: new FormControl(this.user.country)
    });
  }
}
