import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
  ChangeDetectionSource,
  ChangeDetectionSourceSelectorService
} from "../../services/change-detection-source-selector.service";
import {BaseComponent} from "../base/base.component";

@Component({
  selector: 'app-source-selector',
  imports: [],
  templateUrl: './source-selector.component.html',
  styleUrl: './source-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceSelectorComponent extends BaseComponent {
  changeDetectionSourceSelectorService = inject(ChangeDetectionSourceSelectorService)

  readonly sourceOptions = Object.entries(ChangeDetectionSource);

  changeSource(source: string) {
    this.changeDetectionSourceSelectorService.setSource(source as ChangeDetectionSource)
  }
}
