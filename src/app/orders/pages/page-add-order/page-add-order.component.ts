import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();
  constructor(
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public add(item: Order): void {
    this.os.add(item).subscribe((res) => {
      // traite les codes d'erreur que l'api peut retourner
      this.router.navigate(['orders']);
    });
  }

}
