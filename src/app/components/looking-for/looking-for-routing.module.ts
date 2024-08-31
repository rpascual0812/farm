import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookingForPage } from './looking-for.page';

const routes: Routes = [
  {
    path: '',
    component: LookingForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LookingForPageRoutingModule {}
