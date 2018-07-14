import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from "@app/people/people-routing.module";
import { PeopleDetailComponent } from "@app/people-detail/people-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule
  ],
  declarations: [
    PeopleDetailComponent
  ]
})
export class PeopleDetailModule { }
