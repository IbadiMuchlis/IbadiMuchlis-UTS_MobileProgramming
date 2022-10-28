import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IguanaPageRoutingModule } from './iguana-routing.module';

import { IguanaPage } from './iguana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IguanaPageRoutingModule
  ],
  declarations: [IguanaPage]
})
export class IguanaPageModule {}
