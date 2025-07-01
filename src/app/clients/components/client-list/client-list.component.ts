import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements AfterViewInit, OnChanges {
  @Input() clients: Client[] = [];
  @Input() selectedClient: Client | null = null;
  @Output() clientSelected = new EventEmitter<Client>();

  @ViewChildren('clientRow') clientRows!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.scrollSelectedIntoView();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedClient'] && !changes['selectedClient'].firstChange) {
      setTimeout(() => this.scrollSelectedIntoView(), 0);
    }
  }

  private scrollSelectedIntoView() {
    if (!this.selectedClient || !this.clientRows) return;
    const index = this.clients.findIndex(c => c.id === this.selectedClient?.id);
    if (index >= 0) {
      const el = this.clientRows.get(index)?.nativeElement;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
}
