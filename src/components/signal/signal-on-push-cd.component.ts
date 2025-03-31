import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseSignalComponent} from "./base-signal.component";

@Component({
  selector: 'app-signal-on-push-cd',
  templateUrl: './base-signal.component.html',
  styleUrl: './base-signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalOnPushCdComponent extends BaseSignalComponent {
}
