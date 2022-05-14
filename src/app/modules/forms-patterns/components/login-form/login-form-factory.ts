import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginForm } from './login-form';

@Injectable()
export class LoginFormFactory {
  constructor(private readonly formBuilder: FormBuilder) {}

  create(): LoginForm {
    const formGroup = this.createFormGroup();
    return new LoginForm(formGroup);
  }

  private createFormGroup() {
    return this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
