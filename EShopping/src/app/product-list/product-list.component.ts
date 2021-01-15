import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: string): void {
    // alert(`remove Product ` + productId);
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    this.products.splice(index, 1);
  }
  updateQuantity(element) {
    console.log(element);
  }
}
