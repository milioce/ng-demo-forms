import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

import { User } from './../template/user.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './reactive-forms.component.html',
  styles: [`
    input.ng-valid.ng-touched:not(form) {
      border: 1px solid #42A948;
      border-left: 5px solid #42A948;
    }
    input.ng-invalid.ng-touched:not(form) {
      border: 1px solid #dc3545;
      border-left: 5px solid #dc3545;
    }
    .error {
      color: #dc3545;
    }
  `]
})
export class ReactiveFormsComponent implements OnInit {
  form: FormGroup;
  countries = [
    { id: 'es', label: 'Spain' },
    { id: 'fr', label: 'France ' },
    { id: 'it', label: 'Italy' }
  ];

  user: User = {
    name: {
      first: 'Emilio',
      last: 'Calejero'
    },
    email: 'emilio@calejero.es',
    country: this.countries[1],
    username: 'ecalejero',
    languages: ['php', 'java', 'js']
  };

  forbiddenUsernames = ['admin', 'sysadmin'];

  options = [
    {value: 'one', text: 'option one'},
    {value: 'two', text: 'option two'}
  ];

  constructor(private fb: FormBuilder) {
    // this.createForm();
    this.createFormBuilder();
  }

  ngOnInit() {}

  onSubmit() {
    // this.form.markAsTouched();
    this.markAllAsTouched(this.form);

    console.log('form.valid', this.form.valid);
    console.log('form.value', this.form.value);
    console.log('form', this.form);
  }

  get first(): AbstractControl {
    return this.form.get('name.first');
  }

  get last(): any {
    return this.form.get('name.last');
  }

  get username(): any {
    return this.form.get('username');
  }

  get languages(): FormArray {
    return <FormArray>this.form.get('languages');
  }

  get mycontrol(): any {
    return this.form.get('mycontrol');
  }

  onAddLanguage(lang: string = null) {
    const control = new FormControl(lang, Validators.required);
    (<FormArray>this.form.get('languages')).push(control);
  }

  forbiddenNames(control: AbstractControl): ValidationErrors | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }

    return null;
  }

  existsEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailAlreadyExists: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  onSetPatch() {
    this.form.patchValue({ email: 'ecaleroe@everis.com' });
  }

  onSetValue() {
    this.form.setValue({
      name: { first: 'Ana', last: 'García' },
      email: 'ana@test.com',
      country: this.countries[2],
      username: 'ana',
      languages: []
    });

    this.form.setControl('languages', this.fb.array(['php', 'java', 'js']));
  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormGroup({
        first: new FormControl(this.user.name.first, [
          Validators.required,
          Validators.minLength(3)
        ]),
        last: new FormControl(this.user.name.last)
      }),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      country: new FormControl(this.user.country, Validators.required),
      username: new FormControl(
        this.user.username,
        [Validators.required, this.forbiddenNames.bind(this)],
        this.existsEmail
      ),
      languages: new FormArray([])
    });
  }

  private createFormBuilder() {
    this.form = this.fb.group({
      name: this.fb.group({
        first: [this.user.name.first, [Validators.required, Validators.minLength(3)]],
        last: [this.user.name.last],
      }),
      email: [this.user.email, [Validators.required, Validators.email]],
      country: [this.user.country, Validators.required],
      username: [this.user.username, [Validators.required, this.forbiddenNames.bind(this)], this.existsEmail],
      languages: this.fb.array(this.user.languages),
      mycontrol: [null, Validators.required]
    });
  }

  private markAllAsTouched(control: AbstractControl) {
    control.markAsTouched(); // mark group
    if (control.hasOwnProperty('controls')) {
      const ctrl = <any>control;
      for (const inner in ctrl.controls) {
        if (ctrl.controls.hasOwnProperty(inner)) {
          this.markAllAsTouched(ctrl.controls[inner] as AbstractControl);
        }
      }
    }
  }
}
