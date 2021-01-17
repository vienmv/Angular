import { Component, DoCheck } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  //data
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];
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
  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;
  total: number = 0;
  removeProduct(productId: string) {
    alert('Remove ' + productId);
    const index = this.products.findIndex((product) => product.id === productId);
    if(index !==-1){
      this.products.splice(index, 1);
    }
    this.ngDoCheck();
  }

  ngDoCheck() {
    // tinh lai tien
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }
  // update Quantity
  handleUpdateQuantity(p: { id: string; quantity: number }) {
    const product = this.products.find((product) => product.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }
  // ma giam gia
  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      (promoCode) => promoCode.code === code
    );
    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied.`);
    } else {
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
      );
    }
  }

}
