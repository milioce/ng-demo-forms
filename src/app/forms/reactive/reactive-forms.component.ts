import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './reactive-forms.component.html'
})

export class ReactiveFormsComponent implements OnInit {
  form: FormGroup;
  countries: [
    { id: 'es', label: 'Spain' },
    { id: 'fr', label: 'France '},
    { id: 'it', label: 'Italy' }
  ];

  constructor() {
    this.form = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      country: new FormControl('es')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value, this.form.valid);
  }
}