import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

class Product {
  id: string;
  name: string;
  des: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() products;
  @Output() onRemoveProduct =new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: string): void {
    // alert(`remove Product ` + productId);
    this.onRemoveProduct.emit(productId);

  }
  updateQuantity(element) {
    console.log(element);
  }
}
