import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Languages } from 'src/app/models/languages';
import { PersonalData } from 'src/app/models/personalData';


@Component({
	selector: 'app-personal-form',
	templateUrl: './personal-form.component.html',
	styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent {

	languagesAvailable = ['English', 'Portuguese']
	days = [
		{'day': 1},
		{'day': 2},
		{'day': 3},
		{'day': 4},
		{'day': 5},
		{'day': 6},
		{'day': 7},
		{'day': 8},
		{'day': 9},
		{'day': 10},
		{'day': 11},
		{'day': 12},
		{'day': 13},
		{'day': 14},
		{'day': 15},
		{'day': 16},
		{'day': 17},
		{'day': 18},
		{'day': 19},
		{'day': 20},
		{'day': 21},
		{'day': 22},
		{'day': 23},
		{'day': 24},
		{'day': 25},
		{'day': 26},
		{'day': 27},
		{'day': 28},
		{'day': 29},
		{'day': 30},
		{'day': 31}
	];

	constructor(private readonly formBuilder: FormBuilder) { }

	changeLanguage(event: string) {
		console.log(event);
		return null;
	}

	changeDay(event: number) {
		console.log(event);
		return null;
	}
	personalData: PersonalData = {
		firstName: '',
		lastName: '',
		email: '',
		telephone: null,
		address: '',
		zipCode: null,
		city: '',
		birthDay: '',
		birthMonth: '',
		birthYear: '',
		citizenship: '',
		civilState: '',
		gender: '',
		linkedIn: '',
		website: ''
	}

	fields = {
		firstName: new FormControl(this.personalData.firstName, [Validators.required, Validators.maxLength(30)]),
		lastName: new FormControl(this.personalData.lastName, [Validators.required, Validators.maxLength(30)]),
		email: new FormControl(this.personalData.email, [Validators.required, Validators.email]),
		telephone: new FormControl(this.personalData.telephone, [Validators.required, Validators.pattern('^\\d+'), Validators.maxLength(18)]),
		address: new FormControl(this.personalData.address, [Validators.maxLength(250)]),
		zipCode: new FormControl(this.personalData.zipCode, [Validators.pattern('^\\d+'), Validators.maxLength(18)]),
		city: new FormControl(this.personalData.city, [Validators.maxLength(30)]),
		birthDate: new FormControl(this.personalData.birthDay + this.personalData.birthMonth + this.personalData.birthYear),
		citizenship: new FormControl(this.personalData.city, [Validators.maxLength(30)]),
		civilState: new FormControl(this.personalData.civilState, [Validators.maxLength(30)]),
		gender: new FormControl(this.personalData.gender),
		linkedIn: new FormControl(this.personalData.linkedIn, [Validators.maxLength(60)]),
		website: new FormControl(this.personalData.website, [Validators.maxLength(60)]),
	}

	personalDataForm = this.formBuilder.group({
		firstName: this.fields.firstName,
		lastName: this.fields.lastName,
		email: this.fields.email,
		telephone: this.fields.telephone,
		address: this.fields.address,
		zipCode: this.fields.zipCode,
		city: this.fields.city,
		birthDate: this.fields.birthDate,
		citizenship: this.fields.citizenship,
		civilState: this.fields.civilState,
		gender: this.fields.gender,
		linkedIn: this.fields.linkedIn,
		website: this.fields.website
	});

	errorMessages = {
		required: 'This Field is required',
		firstLastNameMaxLength: 'The maximum length is 30 characters',
		telephoneMaxLength: 'The maximum length is 18 characters',
		email: 'invalid email format',
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
