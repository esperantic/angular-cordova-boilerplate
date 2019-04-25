import { Injectable } from '@angular/core';
declare var IonicDeeplink;

@Injectable({
  providedIn: 'root'
})
export class DeeplinkService {

  constructor() {
    IonicDeeplink.route({
      '/product/:productId': {
        target: 'product',
        parent: 'products'
      }
    }, (match) => {
      console.info(match);
    }, (notMatch) => {
      console.warn(notMatch);
    });
  }
}
