import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { SkillsIdioms } from 'src/app/models/skillsIdioms';

@Component({
  selector: 'app-skills-idiom-card',
  templateUrl: './skills-idiom-card.component.html',
  styleUrls: ['./skills-idiom-card.component.scss']
})
export class SkillsIdiomCardComponent {

  @Input() skillsIdioms = '';
  @Input() skillIdiom = '';

  constructor(private readonly formBuilder: FormBuilder) { }
  _skillsIdioms: SkillsIdioms = {
    skillIdiom: '',
    level: ''
  }

  skillsIdiomsFields = {
    skillIdiom: new FormControl(this._skillsIdioms.skillIdiom, Validators.maxLength(25)),
    level: new FormControl(this._skillsIdioms.level, Validators.required),
  }

  skillsIdiomsDataForm = this.formBuilder.group({
    skillIdiom: this.skillsIdiomsFields.skillIdiom,
  });

  onSubmit = () => {
    if (this.skillsIdiomsDataForm.valid) {
      // this.submitEvent(this.personalDataForm);
      this.skillsIdiomsDataForm;
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
