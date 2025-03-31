import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {BaseAsyncPipeComponent} from "./base-async-pipe.component";

@Component({
  selector: 'app-async-pipe-default-cd',
    imports: [
        AsyncPipe
    ],
  templateUrl: './base-async-pipe.component.html',
  styleUrl: './base-async-pipe.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AsyncPipeDefaultCdComponent extends BaseAsyncPipeComponent {
}
