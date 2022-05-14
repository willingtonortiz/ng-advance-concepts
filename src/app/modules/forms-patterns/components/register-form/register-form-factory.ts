import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { formValidators } from '../../../../shared/utils/form-validators';
import { RegisterForm } from './register-form';

/**
 * Use this class to create a form with its initial values
 */
@Injectable()
export class RegisterFormFactory {
  constructor(private readonly formBuilder: FormBuilder) {}

  create(): RegisterForm {
    const formGroup = this.createFormGroup();

    return new RegisterForm(formGroup);
  }

  createFormGroup() {
    return this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validators: [formValidators.equalValues('password', 'confirmPassword')],
      }
    );
  }
}
