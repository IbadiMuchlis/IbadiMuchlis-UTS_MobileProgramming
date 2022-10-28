import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IguanaPage } from './iguana.page';

const routes: Routes = [
  {
    path: '',
    component: IguanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IguanaPageRoutingModule {}
