import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RegisterForm } from './register-form';
import { RegisterFormActions } from './register-form-actions';
import { RegisterFormFactory } from './register-form-factory';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [
    RegisterFormFactory,
    {
      provide: RegisterForm,
      useFactory: (factory: RegisterFormFactory) => factory.create(),
      deps: [RegisterFormFactory],
    },
    RegisterFormActions,
  ],
})
export class RegisterFormComponent {
  isValid$: Observable<boolean>;

  constructor(
    readonly form: RegisterForm,
    readonly actions: RegisterFormActions
  ) {
    this.isValid$ = form.isValid$();
  }
}
