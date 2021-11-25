import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankClientRoutingModule } from './bank-client-routing.module';
import { BankClientComponent } from './bank-client.component';


@NgModule({
  declarations: [
    BankClientComponent
  ],
  imports: [
    CommonModule,
    BankClientRoutingModule
  ]
})
export class BankClientModule { }
