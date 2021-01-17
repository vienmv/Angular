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
  @Output() onUpdateQuantity = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: string): void {
    // alert(`remove Product ` + productId);
    this.onRemoveProduct.emit(productId);

  }
  inputQuantity(id: number, inputElement: HTMLInputElement) {
    const value = inputElement.value;
    const intValue = parseInt(value);

    if (intValue < 1) {
      inputElement.value = -intValue + '';
    } else if (value.length > 2) {
      inputElement.value = value.slice(0, 2);
    }

    this.onUpdateQuantity.emit({ id, quantity: parseInt(inputElement.value) || '' });
  }
}
