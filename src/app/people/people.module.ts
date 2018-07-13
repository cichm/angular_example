import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from "@app/people/people-routing.module";
import { PeopleComponent} from "@app/people/people.component";

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [
    PeopleComponent
  ]
})
export class PeopleModule { }
