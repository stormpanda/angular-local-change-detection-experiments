import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseSourceSelectorComponent} from "./base-source-selector.component";

@Component({
  selector: 'app-source-on-push-cd-selector',
  templateUrl: './base-source-selector.component.html',
  styleUrl: './base-source-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceSelectorOnPushCdComponent extends BaseSourceSelectorComponent {
}
