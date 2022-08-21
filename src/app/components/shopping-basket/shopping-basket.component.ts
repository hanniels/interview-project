import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentModalComponent } from '../modals/payment-modal/payment-modal.component';
import { Item } from '../shopping-item/shopping-item.component';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  items: Item[] = [
    { price: 10, desc: "Thing 1", },
    { price: 20, desc: "Thing 2", },
    { price: 30, desc: "Thing 3", },
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  remove(item: Item) {
    this.items = this.items.filter(element => element !== item);
  }

  sum() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  openPayDialog() {
    let dialogRef = this.dialog.open(PaymentModalComponent, {
      data: this.sum()
    });
    dialogRef.afterClosed().subscribe(x => {
      if (x !== null) {

      }
    });
  }

}
