import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const confirmPassword = (): ValidatorFn => {
  return (form: AbstractControl): ValidationErrors | null => {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    return password &&
      confirmPassword &&
      password?.value !== confirmPassword?.value
      ? { confirmPassword: true }
      : null;
  };
};

const equalValues = (first: string, second: string): ValidatorFn => {
  return (form: AbstractControl): ValidationErrors | null => {
    const firstValue = form.get(first);
    const secondValue = form.get(second);

    return firstValue && secondValue && firstValue?.value !== secondValue?.value
      ? { equalValues: true }
      : null;
  };
};

export const formValidators = {
  confirmPassword,
  equalValues,
};
