import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
