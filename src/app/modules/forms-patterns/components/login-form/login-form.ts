import { FormGroup } from '@angular/forms';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';

type FormModel = {
  username: string;
  password: string;
};

export class LoginForm {
  readonly initialValue: FormModel;
  private readonly _isLoading = new BehaviorSubject<boolean>(false);

  constructor(private readonly form: FormGroup) {
    this.initialValue = this.form.value;
  }

  get asFormGroup() {
    return this.form;
  }

  isLoading$(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  isValid$(): Observable<boolean> {
    return this.form.statusChanges.pipe(
      map((status) => status === 'VALID'),
      startWith(false)
    );
  }

  get isValid(): boolean {
    return this.form.valid;
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading.next(isLoading);
  }
}
