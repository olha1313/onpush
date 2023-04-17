import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  food = 'onpush';

  public ngDoCheck() {
    console.count('ngDoCheck AppComponent');
  }
}
