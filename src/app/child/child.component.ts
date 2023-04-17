import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [`:host { display: block; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @HostBinding('style.backgroundColor') public bgColor: string = '';

  constructor(private readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('color');
      this.bgColor = '#ff0000'

      this.cdr.markForCheck();
    }, 1000)
  }

  public ngDoCheck() {
    console.count('ngDoCheck ChildComponent');
  }

  public triggerChild(): void {
    console.log('triggerChild');
  }
}
