import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public readonly interval$ = interval(1000);
  public readonly objects$ = new BehaviorSubject('Old');
}
