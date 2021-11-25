import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesClientComponent } from './services-client.component';

const routes: Routes = [{ path: '', component: ServicesClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesClientRoutingModule { }
