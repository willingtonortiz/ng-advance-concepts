import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

type FormModel = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export class RegisterForm {
  initialValue: FormModel;

  constructor(private readonly form: FormGroup) {
    this.initialValue = this.form.value as FormModel;
  }

  get asFormGroup(): FormGroup {
    return this.form;
  }

  isValid$(): Observable<boolean> {
    return this.form.statusChanges.pipe(
      map((status) => status === 'VALID'),
      startWith(false)
    );
  }

  isValid(): boolean {
    return this.form.valid;
  }
}
