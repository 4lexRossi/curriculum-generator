import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AboutMeData } from 'src/app/models/aboutMeData';
import { ExperienceData } from 'src/app/models/experienceData';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  descriptionPattern = '^[A-Za-z0-9-_ ]+$';

  constructor(private readonly formBuilder: FormBuilder) { }

  aboutMeData: AboutMeData = {
    aboutMe: ''
  }

  experienceData: ExperienceData = {
    jobTitle: '',
    city: '',
    company: '',
    beginData: '',
    endData: '',
    description: ''
  }

  ngOnInit(): void {
  }

  aboutFields = {
    aboutMe : new FormControl(this.aboutMeData.aboutMe, Validators.pattern(this.descriptionPattern)),
  }

  experienceFields = {
    jobTitle : new FormControl(this.experienceData.jobTitle, Validators.pattern(this.descriptionPattern)),
    city : new FormControl(this.experienceData.city, Validators.maxLength(30,)),
    company : new FormControl(this.experienceData.company, Validators.maxLength(30,)),
    beginData : new FormControl(this.experienceData.beginData, Validators.maxLength(30,)),
    endData : new FormControl(this.experienceData.endData, Validators.maxLength(30,)),
    description : new FormControl(this.experienceData.description, Validators.pattern(this.descriptionPattern)),
  }

  aboutMeDataForm = this.formBuilder.group({
    aboutMe: this.aboutFields.aboutMe,
  });

  experienceDataForm = this.formBuilder.group({
    jobTitle: this.experienceFields.jobTitle,
    city: this.experienceFields.city,
    company: this.experienceFields.company,
    beginData: this.experienceFields.beginData,
    endData: this.experienceFields.endData,
    description: this.experienceFields.description,
  });

  onSubmit = () => {
    if (this.aboutMeDataForm.valid) {
      // this.submitEvent(this.personalDataForm);
      this.aboutMeDataForm;
    // } else {
    //   this.fields.customer.setErrors({invalidCustomer: true});
    //   this.validateAllFormFields(this.formGroupReference);
    //   this.toastComponent.error(this.translate.instant('ERROR'), this.translate.instant('VALIDATION_ERRORS'));
    }
    if (this.experienceDataForm.valid) {
      this.experienceDataForm;
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
