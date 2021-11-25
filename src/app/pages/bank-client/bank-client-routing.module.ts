import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankClientComponent } from './bank-client.component';

const routes: Routes = [{ path: '', component: BankClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankClientRoutingModule { }
