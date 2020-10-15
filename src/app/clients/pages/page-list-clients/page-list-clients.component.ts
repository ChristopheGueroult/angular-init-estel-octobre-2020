import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];
  public states = Object.values(StateClient);

  constructor(private cs: ClientsService) { }
  ngOnInit(): void {
    this.collection$ = this.cs.collection;
    this.headers = [
      'Name',
      'Total HT',
      'Tva',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Client, event): void {
    const state = event.target.value;
    this.cs.changeState(item, state).subscribe((res) => {
      item.state = res.state;
    });
  }

  public openPopup(): void {
    console.log('open my popup');
  }

}
