import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {BaseCdExpComponent} from "../base/base-cd-exp.component";
import {ChangeDetectionSource} from "../../services/change-detection-source-selector.service";

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent extends BaseCdExpComponent {
  value= signal(0);

  override add() {
    this.value.update(oldValue => oldValue + 1)
  }

  override getChangeDetectionSource(): ChangeDetectionSource {
    return ChangeDetectionSource.SIGNAL;
  }
}
