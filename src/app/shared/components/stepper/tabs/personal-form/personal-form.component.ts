import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/models/languages';

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
  constructor() { }

  ngOnInit(): void {
  }

}
