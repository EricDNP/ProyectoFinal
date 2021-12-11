import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosPage } from './negocios.page';

const routes: Routes = [
  {
    path: '',
    component: NegociosPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: ':negocioId',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegociosPageRoutingModule {}
