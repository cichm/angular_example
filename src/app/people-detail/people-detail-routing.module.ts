import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import {PeopleDetailComponent} from "@app/people-detail/people-detail.component";

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: PeopleDetailComponent, data: { title: extract('People') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PeopleDetailRoutingModule { }
