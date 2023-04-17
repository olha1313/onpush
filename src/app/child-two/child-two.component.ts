import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent implements OnInit {
  public title = '';

  constructor(private readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'test';

      this.cdr.detectChanges();
    }, 2000)
  }

  public onClick(): void {
    console.count('ChildTwoComponent click');
  }

  public ngDoCheck() {
    console.count('ngDoCheck ChildTwoComponent');
  }

  public triggerChildTwo(): void {
    console.log('triggerChildTwo');
  }
}
