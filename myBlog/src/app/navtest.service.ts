import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavtestService {

  public translate = new Subject <any>();

  constructor() { }
}
