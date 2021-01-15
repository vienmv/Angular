import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numberItems: number = 4;
  subTotal:number=460;
  tax:number=this.subTotal/10;
  total:number=this.subTotal+this.tax;
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
}
