import { Component } from '@angular/core';
import { combineLatest, map, Observable, startWith } from 'rxjs';

import { LoginForm } from './login-form';
import { LoginFormActions } from './login-form-actions';
import { LoginFormFactory } from './login-form-factory';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [
    LoginFormFactory,
    {
      provide: LoginForm,
      useFactory: (factory: LoginFormFactory) => factory.create(),
      deps: [LoginFormFactory],
    },
    LoginFormActions,
  ],
})
export class LoginFormComponent {
  isFormValid$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  canLogin$: Observable<boolean>;

  constructor(
    public readonly form: LoginForm,
    public readonly actions: LoginFormActions
  ) {
    this.isFormValid$ = this.form.isValid$();
    this.isLoading$ = this.form.isLoading$();
    this.canLogin$ = combineLatest([this.isFormValid$, this.isLoading$]).pipe(
      map(([isValid, isLoading]) => isValid && !isLoading),
      startWith(false)
    );
  }
}
