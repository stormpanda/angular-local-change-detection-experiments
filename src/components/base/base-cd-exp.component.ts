import {ChangeDetectionStrategy, Component, inject, NgZone, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformServer} from "@angular/common";
import {
    ChangeDetectionSource,
    ChangeDetectionSourceSelectorService
} from "../../services/change-detection-source-selector.service";
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {BaseComponent} from "./base.component";
import {interval} from "rxjs";

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class BaseCdExpComponent extends BaseComponent {
    ngZone = inject(NgZone);
    platform = inject(PLATFORM_ID)
    changeDetectionSourceSelectorService = inject(ChangeDetectionSourceSelectorService);
    changeDetectionSource = toSignal(this.changeDetectionSourceSelectorService.source$);

    constructor() {
        super();

        if (isPlatformServer(this.platform)) return;

        this.ngZone.runOutsideAngular(() => interval(1000).pipe(
            takeUntilDestroyed()
        ).subscribe(()=> {
            if (this.changeDetectionSource() === this.getChangeDetectionSource()) {
                this.add();
            }
        }))
    }

    abstract add(): void;

    abstract getChangeDetectionSource(): ChangeDetectionSource;
}
