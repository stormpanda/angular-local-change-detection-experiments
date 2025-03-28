import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformServer} from "@angular/common";
import {
    ChangeDetectionSource,
    ChangeDetectionSourceSelectorService
} from "../../services/change-detection-source-selector.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {BaseComponent} from "./base.component";

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class BaseCdExpComponent extends BaseComponent {
    platform = inject(PLATFORM_ID)
    changeDetectionSourceSelectorService = inject(ChangeDetectionSourceSelectorService)

    changeDetectionSource = toSignal(this.changeDetectionSourceSelectorService.source$)

    constructor() {
        super();

        if (isPlatformServer(this.platform)) return

        setInterval(()=> {
            if (this.changeDetectionSource() === this.getChangeDetectionSource()) {
                this.add();
            }
        }, 1000)
    }

    abstract add(): void;

    abstract getChangeDetectionSource(): ChangeDetectionSource;
}
