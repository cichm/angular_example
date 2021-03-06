import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { PeopleComponent } from "./people.component";

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: PeopleComponent, data: { title: extract('People') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PeopleRoutingModule { }
