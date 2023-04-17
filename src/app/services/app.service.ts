import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public readonly interval$ = interval(1000);
}
