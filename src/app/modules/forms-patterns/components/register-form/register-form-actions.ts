import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RegisterForm } from './register-form';

/**
 * Use this class to handle the register form actions.
 */
@Injectable()
export class RegisterFormActions {
  submitButtonClick = new Subject<void>();
  resetButtonClick = new Subject<void>();

  constructor(private readonly form: RegisterForm) {
    this.submitButtonClickedHandler();
    this.resetButtonClickedHandler();
  }

  submitButtonClickedHandler() {
    this.submitButtonClick.subscribe(() => {
      console.log(this.form.asFormGroup.value);
      console.log('The Register form has been submitted');
    });
  }

  resetButtonClickedHandler() {
    this.resetButtonClick.subscribe(() => {
      this.form.asFormGroup.reset();
      console.log('The Register form has been reset');
    });
  }
}
