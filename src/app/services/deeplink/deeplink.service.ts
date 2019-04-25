import { Injectable } from '@angular/core';
declare var IonicDeeplink;

interface IonicDeepLinkResult {
  fragment: string;
  host: string;
  path: string;
  queryString: string;
  scheme: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeeplinkService {

  constructor() {
    IonicDeeplink.onDeepLink((result: IonicDeepLinkResult) => {
      console.log(result);
    });
  }
}
