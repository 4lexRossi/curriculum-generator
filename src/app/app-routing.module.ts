import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MainModule } from './modules/main.module';
import { ComponentsModule } from './shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alos-cv-generator',
    pathMatch: 'full'
  },
  {
    path: 'alos-cv-generator',
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainModule,
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
