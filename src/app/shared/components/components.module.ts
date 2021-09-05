import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalFormComponent } from './stepper/tabs/personal-form/personal-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StepperComponent,
    PersonalFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    StepperComponent,
    PersonalFormComponent
  ]
})
export class ComponentsModule { }
