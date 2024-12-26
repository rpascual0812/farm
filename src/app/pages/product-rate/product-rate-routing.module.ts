import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductRatePage } from './product-rate.page';

const routes: Routes = [
  {
    path: '',
    component: ProductRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRatePageRoutingModule {}
