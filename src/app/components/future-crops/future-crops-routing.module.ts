import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutureCropsPage } from './future-crops.page';

const routes: Routes = [
  {
    path: '',
    component: FutureCropsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutureCropsPageRoutingModule {}
