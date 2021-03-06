import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  // public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  public states = Object.values(StateOrder);
  constructor(private os: OrdersService) { }
  ngOnInit(): void {
    this.collection$ = this.os.collection;
    // this.os.collection.subscribe(
    //   (datas) => {
    //     this.collection = datas;
    //   }
    // );
    this.headers = [
      'Type',
      'Client',
      'nbjours',
      'TjmHt',
      'Total HT',
      'Totel TTC',
      'State'
    ];
  }

  public changeState(item: Order, event): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      // gérer les codes d'erreur de l'api
      item.state = res.state;
    });
  }

  public openPopup(): void {
    console.log('open my popup');
  }

}
