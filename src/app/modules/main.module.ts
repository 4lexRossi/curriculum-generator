import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';
import { GenerateFormComponent } from './generate-form/generate-form.component';
import { PersonalFormComponent } from './generate-form/tabs/personal-form/personal-form.component';
import { ExperienceFormComponent } from './generate-form/tabs/experience-form/experience-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienceQualificationCardComponent } from './generate-form/tabs/experience-form/experience-qualification-card/experience-qualification-card.component';
import { AboutAchievementsCardComponent } from './generate-form/tabs/experience-form/about-achievements-card/about-achievements-card.component';
import { SkillsIdiomCardComponent } from './generate-form/tabs/experience-form/skills-idiom-card/skills-idiom-card.component';
import { GenerateCVComponent } from './generate-form/tabs/generate-cv/generate-cv.component';

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
    ExperienceFormComponent,
    ExperienceQualificationCardComponent,
    AboutAchievementsCardComponent,
    SkillsIdiomCardComponent,
    GenerateCVComponent
  ],
  exports: [
    GenerateFormComponent,
    PersonalFormComponent,
    ExperienceFormComponent
  ]
})
export class MainModule { }
