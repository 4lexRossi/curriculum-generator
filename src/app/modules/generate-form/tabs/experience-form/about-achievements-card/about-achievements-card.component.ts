import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AboutMeData } from 'src/app/models/aboutMeData';

@Component({
  selector: 'app-about-achievements-card',
  templateUrl: './about-achievements-card.component.html',
  styleUrls: ['./about-achievements-card.component.scss']
})
export class AboutAchievementsCardComponent {
  @Input() profileAchievement = '';
  @Input() aboutDescription = '';

  descriptionPattern = '^[A-Za-z0-9-_ ]+$';

  constructor(private readonly formBuilder: FormBuilder) { }

  aboutMeData: AboutMeData = {
    aboutMe: ''
  }

  aboutFields = {
    aboutMe : new FormControl(this.aboutMeData.aboutMe, Validators.pattern(this.descriptionPattern)),
  }

  aboutMeDataForm = this.formBuilder.group({
    aboutMe: this.aboutFields.aboutMe,
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
