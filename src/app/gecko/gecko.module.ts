import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeckoPageRoutingModule } from './gecko-routing.module';

import { GeckoPage } from './gecko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeckoPageRoutingModule
  ],
  declarations: [GeckoPage]
})
export class GeckoPageModule {}
