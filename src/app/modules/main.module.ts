import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../shared/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [HomeComponent]
})
export class MainModule { }
