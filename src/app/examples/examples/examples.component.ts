import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { routeAnimations, selectAuth } from '@app/core';
import {
  State as BaseSettingsState,
  ActionPageHeaderVisibilityAndTitle
} from '@app/settings';

import { State as BaseExamplesState } from '../examples.state';

interface State extends BaseSettingsState, BaseExamplesState {}

@Component({
  selector: 'aw-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'aw.examples.menu.todos' },
    { link: 'stock-market', label: 'aw.examples.menu.stocks' },
    { link: 'theming', label: 'aw.examples.menu.theming' },
    { link: 'crud', label: 'aw.examples.menu.crud' },
    { link: 'form', label: 'aw.examples.menu.form' },
    { link: 'notifications', label: 'aw.examples.menu.notifications' },
    { link: 'authenticated', label: 'aw.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(
      select(selectAuth),
      map(auth => auth.isAuthenticated)
    );
    const headerPage = {
      isVisible: true,
      title: 'aw.menu.examples'
    };
    this.store.dispatch(new ActionPageHeaderVisibilityAndTitle(headerPage));
  }
}
