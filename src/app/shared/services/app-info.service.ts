import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Vuexy Dev';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
