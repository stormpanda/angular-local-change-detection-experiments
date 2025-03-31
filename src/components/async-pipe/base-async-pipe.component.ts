import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BaseCdExpComponent} from "../base/base-cd-exp.component";
import {ChangeDetectionSource} from "../../services/change-detection-source-selector.service";

@Component({
  template: '',
})
export class BaseAsyncPipeComponent extends BaseCdExpComponent{
  valueSubject= new BehaviorSubject(0);

  override add() {
    this.valueSubject.next(this.valueSubject.value + 1)
  }

  override getChangeDetectionSource(): ChangeDetectionSource {
    return ChangeDetectionSource.ASYNC_PIPE;
  }
}
