import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-sumary',
  templateUrl: './cart-sumary.component.html',
})
export class CartSumaryComponent implements OnInit {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() total: number;
  constructor() {}
  ngOnInit(): void {}
}
