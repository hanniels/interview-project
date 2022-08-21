import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Item {
  price: number;
  desc: string;
}

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})

export class ShoppingItemComponent {
  @Input() item!: Item;
  @Output() onRemove = new EventEmitter<never>();

  remove() {
    this.onRemove.emit();
  }
}
