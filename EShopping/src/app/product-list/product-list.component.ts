import { Component, OnInit } from '@angular/core';

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
  products: Product[] = [
    {
      id: `1`,
      name: 'Iphone 11 promax',
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Phasellus in egestas ipsum, non gravida felis. Class aptent taciti
         sociosqu ad litora torquent per conubia nostra`,
      thumbnail: '/assets/11ProMax.jpg',
      quantity: 1,
      price: 1000,
    },
    {
      id: `2`,
      name: 'Iphone 11',
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Phasellus in egestas ipsum, non gravida felis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra`,
      thumbnail: '/assets/Iphone11.jpg',
      quantity: 1,
      price: 990,
    },
    {
      id: `3`,
      name: 'Iphone 11 Pro',
      des: `Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Phasellus in egestas ipsum, non gravida felis. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra`,
      thumbnail: '/assets/Iphone11.jpg',
      quantity: 1,
      price: 999,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: string): void {
   // alert(`remove Product ` + productId);
    const index= this.products.findIndex(product => product.id === productId)
    this.products.splice(index,1)
  }
}
