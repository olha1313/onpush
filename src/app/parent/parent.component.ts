import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  // public count = 0;
  public objects$!: Observable<string>;

  constructor(private readonly cdr: ChangeDetectorRef, private readonly appService: AppService) {}

  ngOnInit(): void {
    this.cdr.detach();
    this.appService.interval$.subscribe(() => console.count('Observable'));

    this.objects$ = this.appService.objects$;


    // setTimeout(() => {
    //   console.log('setTimeout after 1000 ParentComponent');
    // }, 1000);
    //
    // setInterval(() => {
    //   this.count++;
    //   console.log('setInterval after 1000 ParentComponent', this.count);
    //   this.cdr.detectChanges();
    // }, 1000);
  }

  public ngDoCheck() {
    console.count('ngDoCheck ParentComponent');
  }

  public triggerParent(): void {
    console.log('triggerParent');
  }

  public onReattachClick(): void {
    this.cdr.reattach();
  }

  public onDetachClick(): void {
    this.cdr.detach();
  }

  public onObjectClick(): void {
    this.appService.objects$.next('New');
  }
}
