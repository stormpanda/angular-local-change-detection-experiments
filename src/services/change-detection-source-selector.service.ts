import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export enum ChangeDetectionSource {
  NONE = 'NONE',
  SIGNAL = 'SIGNAL',
  ASYNC_PIPE = 'ASYNC_PIPE',
}

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionSourceSelectorService {

  private sourceSubject = new BehaviorSubject(ChangeDetectionSource.NONE);
  source$ = this.sourceSubject.asObservable();

  setSource(source: ChangeDetectionSource) {
    this.sourceSubject.next(source);
  }
}
