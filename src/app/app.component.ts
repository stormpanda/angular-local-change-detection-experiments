import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {AsyncPipeOnPushCdComponent} from "../components/async-pipe/async-pipe-on-push-cd.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipeDefaultCdComponent} from "../components/async-pipe/async-pipe-default-cd.component";
import {SignalOnPushCdComponent} from "../components/signal/signal-on-push-cd.component";
import {SignalDefaultComponent} from "../components/signal/signal-default-cd.component";
import {SourceSelectorOnPushCdComponent} from "../components/source-selector/source-selector-on-push-cd.component";
import {SourceSelectorDefaultCdComponent} from "../components/source-selector/source-selector-default-cd.component";

@Component({
  selector: 'app-root',
  imports: [AsyncPipeOnPushCdComponent, SignalOnPushCdComponent, ReactiveFormsModule, AsyncPipeDefaultCdComponent, SignalDefaultComponent, SourceSelectorOnPushCdComponent, SourceSelectorDefaultCdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  useOnPushChangeDetection = signal(true);

  getLatestRenderTime() {
    return 'Last time rendered at: ' + new Date().toLocaleTimeString("de-DE", { hour12: false });
  }
}
