import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  experienceDataForm!: any;

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
}
