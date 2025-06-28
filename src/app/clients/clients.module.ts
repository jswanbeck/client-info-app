import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';

@NgModule({
  declarations: [ClientListPageComponent, ClientListComponent, ClientInfoComponent],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
