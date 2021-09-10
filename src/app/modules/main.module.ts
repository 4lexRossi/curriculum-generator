import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { GenerateFormComponent } from './generate-form/generate-form.component';
import { PersonalFormComponent } from './generate-form/tabs/personal-form/personal-form.component';
import { ExperienceFormComponent } from './generate-form/tabs/experience-form/experience-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    GenerateFormComponent,
    PersonalFormComponent,
    ExperienceFormComponent
  ],
  exports: [
    GenerateFormComponent,
    PersonalFormComponent,
    ExperienceFormComponent
  ]
})
export class MainModule { }
