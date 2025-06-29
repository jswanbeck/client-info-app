import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';

@NgModule({
  declarations: [ClientListPageComponent, ClientListComponent, ClientInfoComponent],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
