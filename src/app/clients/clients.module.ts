import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientListItemComponent } from './components/client-list-item/client-list-item.component';


@NgModule({
  declarations: [
    ClientListPageComponent,
    ClientListComponent,
    ClientListItemComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
