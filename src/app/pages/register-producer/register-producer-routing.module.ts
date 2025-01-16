import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterProducerPage } from './register-producer.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterProducerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterProducerPageRoutingModule {}
