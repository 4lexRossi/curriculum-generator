import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienceData } from 'src/app/models/experienceData';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  descriptionPattern = '^[A-Za-z0-9-_ ]+$';

  constructor(private readonly formBuilder: FormBuilder) { }

  experienceData: ExperienceData = {
    aboutMe: ''
  }

  ngOnInit(): void {
  }

  fields = {
    aboutMe : new FormControl(this.experienceData.aboutMe, Validators.pattern(this.descriptionPattern)),
  }

  experienceDataForm = this.formBuilder.group({
    aboutMe: this.fields.aboutMe,
  });

  onSubmit = () => {
    if (this.experienceDataForm.valid) {
      // this.submitEvent(this.personalDataForm);
      this.experienceDataForm;
    // } else {
    //   this.fields.customer.setErrors({invalidCustomer: true});
    //   this.validateAllFormFields(this.formGroupReference);
    //   this.toastComponent.error(this.translate.instant('ERROR'), this.translate.instant('VALIDATION_ERRORS'));
    }
  }

  errorMessages = {
    descriptionPattern: 'Only A-Z a-z 0-9 - _ characters allowed'
  };

  getErrorMessage(fieldName: string, field: any) {
    if (field.hasError('pattern')) {
      return this.errorMessages.descriptionPattern;
    }

    return '';
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
