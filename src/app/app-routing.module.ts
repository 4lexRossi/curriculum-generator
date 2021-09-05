import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home.module';

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
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
