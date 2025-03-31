import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {BaseAsyncPipeComponent} from "./base-async-pipe.component";

@Component({
  selector: 'app-async-pipe-on-push-cd',
    imports: [
        AsyncPipe
    ],
  templateUrl: './base-async-pipe.component.html',
  styleUrl: './base-async-pipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeOnPushCdComponent extends BaseAsyncPipeComponent {
}
