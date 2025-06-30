import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ExpandablePanelModule } from '../shared/ui/expandable-panel/expandable-panel.module';
import { ModalModule } from '../shared/ui/modal/modal.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientModalComponent } from './components/client-modal/client-modal.component';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';

@NgModule({
  declarations: [ClientListPageComponent, ClientListComponent, ClientInfoComponent, ClientModalComponent],
  imports: [CommonModule, FormsModule, ClientsRoutingModule, ModalModule, ExpandablePanelModule],
})
export class ClientsModule {}
