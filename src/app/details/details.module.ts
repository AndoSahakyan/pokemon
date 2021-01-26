import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsPageComponent
  }
];

@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class DetailsModule { }
