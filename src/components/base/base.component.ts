import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID, signal} from '@angular/core';

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class BaseComponent {
    getLatestRenderTime() {
        return 'Last time rendered at: ' + new Date().toLocaleTimeString("de-DE", { hour12: false });
    }
}
