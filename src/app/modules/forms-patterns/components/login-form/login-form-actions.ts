import { Injectable } from '@angular/core';
import { firstValueFrom, Subject, timer } from 'rxjs';

import { LoginForm } from './login-form';

@Injectable()
export class LoginFormActions {
  loginButtonClicked = new Subject<void>();
  resetButtonClicked = new Subject<void>();

  constructor(private readonly form: LoginForm) {
    this.handleSubmitButtonClick();
    this.handleResetButtonClick();
  }

  private handleSubmitButtonClick(): void {
    this.loginButtonClicked.subscribe(async () => {
      const isValid = this.form.isValid;

      if (!isValid) {
        console.log('The form is invalid');

        return;
      }

      this.form.setIsLoading(true);
      const values = this.form.asFormGroup.value;

      await firstValueFrom(timer(2000));

      console.log(values);

      this.form.setIsLoading(false);
    });
  }

  private handleResetButtonClick(): void {
    this.resetButtonClicked.subscribe(() => {
      this.form.asFormGroup.reset();
    });
  }
}
