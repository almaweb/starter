import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import {
  tap,
  map,
  distinctUntilChanged,
  filter,
  withLatestFrom
} from 'rxjs/operators';

import { LocalStorageService } from '@app/core';
import { State } from './awApp.state';

export const PAGE_HEADER_KEY = 'AW';

@Injectable()
export class AwEffects {
  constructor(
    private actions$: Actions<Action>,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}

  // @Effect({ dispatch: false })
  // setPageHeader = this.actions$.pipe(
  //   ofType(PageHeaderActionTypes.IS_VISIBLE),
  //   withLatestFrom(this.store.pipe(select(selectIsVisibleHeaderPage))),
  //   tap(([actions, headerState]) =>
  //     this.localStorageService.setItem(PAGE_HEADER_KEY, headerState)
  //   )
  // );
}
