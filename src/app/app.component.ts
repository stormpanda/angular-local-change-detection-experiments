import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {AsyncPipeComponent} from "../components/async-pipe/async-pipe.component";
import {SignalComponent} from "../components/signal/signal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SourceSelectorComponent} from "../components/source-selector/source-selector.component";

@Component({
  selector: 'app-root',
  imports: [AsyncPipeComponent, SignalComponent, ReactiveFormsModule, SourceSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  getLatestRenderTime() {
    return 'Last time rendered at: ' + new Date().toLocaleTimeString("de-DE", { hour12: false });
  }
}
