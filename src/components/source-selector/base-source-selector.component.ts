import {Component, inject} from '@angular/core';
import {
  ChangeDetectionSource,
  ChangeDetectionSourceSelectorService
} from "../../services/change-detection-source-selector.service";
import {BaseComponent} from "../base/base.component";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  template: '',
})
export class BaseSourceSelectorComponent extends BaseComponent {
  changeDetectionSourceSelectorService = inject(ChangeDetectionSourceSelectorService)
  selectedSource = toSignal(this.changeDetectionSourceSelectorService.source$)

  readonly sourceOptions = Object.entries(ChangeDetectionSource);

  changeSource(source: string) {
    this.changeDetectionSourceSelectorService.setSource(source as ChangeDetectionSource)
  }
}
