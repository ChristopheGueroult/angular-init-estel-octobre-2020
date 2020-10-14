import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // set collection
  set collection(obj: Observable<Order[]>) {
    this.collection$ = obj;
  }

  // change state item in collection
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // update iem in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // delete item in collection

  // get item by id

}
