import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'createTicket', loadChildren: () => import('./pages/create-ticket/create-ticket.module').then(m => m.CreateTicketModule) },
  { path: 'servicesClient', loadChildren: () => import('./pages/services-client/services-client.module').then(m => m.ServicesClientModule) },
  { path: 'bankClient', loadChildren: () => import('./pages/bank-client/bank-client.module').then(m => m.BankClientModule) },

  { path: '', redirectTo: 'createTicket', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./pages/create-ticket/create-ticket.module').then(m => m.CreateTicketModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
