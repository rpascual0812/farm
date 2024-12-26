import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductRatingsPage } from './product-ratings.page';

const routes: Routes = [
  {
    path: '',
    component: ProductRatingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRatingsPageRoutingModule {}
