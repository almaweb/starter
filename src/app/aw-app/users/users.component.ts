import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { Store } from '@ngrx/store';
import { ActionPageHeaderVisibilityAndTitle } from '@app/settings/settings.actions';

@Component({
  selector: 'aw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    const headerPage = {
      isVisible: true,
      title: 'aw.menu.users'
    };
    this.store.dispatch(new ActionPageHeaderVisibilityAndTitle(headerPage));
  }
}
