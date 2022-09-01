import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Dynform } from '../interface/dynform';

@Injectable({
  providedIn: 'root',
})
export class FormServicesService {
  constructor(private fb: FormBuilder) {}

  public createForm(formObj: Dynform[]) {
    let fg = this.createControl(formObj);
    return this.fb.group(fg);
  }

  private createValidation(validationObj: any) {
    let validator = [];
    if (validationObj.required) {
      validator.push(Validators.required);
    }
    if (validationObj.minlength) {
      validator.push(Validators.minLength(validationObj.minlength));
    }
    if (validationObj.maxlenght) {
      validator.push(Validators.maxLength(validationObj.maxlength));
    }
    if (validationObj.pattern) {
      validator.push(this.patternValidation(validationObj.pattern));
    }
    return Validators.compose(validator);
  }

  private createControl(formObj: Dynform[]) {
    let control: any = {};
    formObj.forEach((formElement) => {
      let validation = this.createValidation(formElement.validation);
      control[formElement.controlName] = new FormControl(
        formElement.value,
        validation
      );
    });
    return control;
  }

  private patternValidation(pattern: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let regex = new RegExp(pattern);
      return regex.test(control.value)
        ? null
        : {
            patternErr: true,
          };
    };
  }
}
