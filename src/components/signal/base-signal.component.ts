import {Component, signal} from '@angular/core';
import {BaseCdExpComponent} from "../base/base-cd-exp.component";
import {ChangeDetectionSource} from "../../services/change-detection-source-selector.service";

@Component({
  template: '',
})
export class BaseSignalComponent extends BaseCdExpComponent {
  value= signal(0);

  override add() {
    this.value.update(oldValue => oldValue + 1)
  }

  override getChangeDetectionSource(): ChangeDetectionSource {
    return ChangeDetectionSource.SIGNAL;
  }
}
