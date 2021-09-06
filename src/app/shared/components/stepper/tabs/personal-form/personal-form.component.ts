import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Languages } from 'src/app/models/languages';
import { PersonalData } from 'src/app/models/personalData';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {
  languages: Languages[] = [
    {value: 'english-0', viewValue: 'English'},
    {value: 'portuguese-1', viewValue: 'Portuguese'}
  ];

  selectedLanguage = this.languages[1].value;
  constructor(private readonly formBuilder: FormBuilder,) { }

  personalData: PersonalData = {
    firstName: '',
    lastName: '',
    email: '',
    telephone: null,
    address: '',
    zipCode: null,
    city: ''
  }

  fields = {
    firstName : new FormControl(this.personalData.firstName, [Validators.required, Validators.maxLength(30)]),
    lastName : new FormControl(this.personalData.lastName, [Validators.required, Validators.maxLength(30)]),
    email : new FormControl(this.personalData.email, [Validators.required, Validators.email]),
    telephone : new FormControl(this.personalData.telephone, [Validators.required, Validators.pattern('^\\d+'), Validators.maxLength(18)]),
    address : new FormControl(this.personalData.address, [Validators.maxLength(30)]),
    zipCode : new FormControl(this.personalData.zipCode, [Validators.pattern('^\\d+'), Validators.maxLength(18)]),
    city : new FormControl(this.personalData.city, [Validators.maxLength(30)]),
  }

  personalDataForm = this.formBuilder.group({
    firstName: this.fields.firstName,
    lastName: this.fields.lastName,
    email: this.fields.email,
    telephone: this.fields.telephone,
    address : this.fields.address,
    zipCode : this.fields.zipCode,
    city : this.fields.city,
  });

  ngOnInit(): void {
  }

  errorMessages = {
    required:'This Field is required',
    firstLastNameMaxLength: 'The maximum length is 30 characters',
    telephoneMaxLength: 'The maximum length is 18 characters',
    email:'invalid email format',
    telephonePattern: 'Only be numbers allowed'
  };

  getErrorMessage(fieldName: string, field: any) {
    if (field.hasError('required')) {
      return this.errorMessages.required;
    }

    if (field.hasError('maxlength')) {
      if (fieldName === 'telephone') {
        return this.errorMessages.telephoneMaxLength;
      } else {
        return this.errorMessages.firstLastNameMaxLength;
      }
    }

    if (field.hasError('email')) {
      return this.errorMessages.email;
    }

    if (field.hasError('pattern')) {
      return this.errorMessages.telephonePattern;
    }

    return '';
  }

  onSubmit = () => {
    if (this.personalDataForm.valid) {
      // this.submitEvent(this.personalDataForm);
      this.personalDataForm;
    // } else {
    //   this.fields.customer.setErrors({invalidCustomer: true});
    //   this.validateAllFormFields(this.formGroupReference);
    //   this.toastComponent.error(this.translate.instant('ERROR'), this.translate.instant('VALIDATION_ERRORS'));
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
