import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesClientRoutingModule } from './services-client-routing.module';
import { ServicesClientComponent } from './services-client.component';


@NgModule({
  declarations: [
    ServicesClientComponent
  ],
  imports: [
    CommonModule,
    ServicesClientRoutingModule
  ]
})
export class ServicesClientModule { }
