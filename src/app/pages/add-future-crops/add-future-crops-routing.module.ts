import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFutureCropsPage } from './add-future-crops.page';

const routes: Routes = [
  {
    path: '',
    component: AddFutureCropsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFutureCropsPageRoutingModule {}
