import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseSignalComponent} from "./base-signal.component";

@Component({
  selector: 'app-signal-default-cd',
  templateUrl: './base-signal.component.html',
  styleUrl: './base-signal.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class SignalDefaultComponent extends BaseSignalComponent {
}
