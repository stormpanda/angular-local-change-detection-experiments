import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {BaseCdExpComponent} from "../base/base-cd-exp.component";
import {ChangeDetectionSource} from "../../services/change-detection-source-selector.service";

@Component({
  selector: 'app-async-pipe',
    imports: [
        AsyncPipe
    ],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeComponent extends BaseCdExpComponent{
  valueSubject= new BehaviorSubject(0);

  override add() {
    this.valueSubject.next(this.valueSubject.value + 1)
  }

  override getChangeDetectionSource(): ChangeDetectionSource {
    return ChangeDetectionSource.ASYNC_PIPE;
  }
}
