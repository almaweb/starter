import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { Store } from '@ngrx/store';
// import { State } from '../awApp.state';
import { ActionPageHeaderVisibilityAndTitle } from '@app/settings/settings.actions';

@Component({
  selector: 'aw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../assets/release-butler.png');

  constructor(private store: Store<any>) {}

  ngOnInit() {
    const headerPage = {
      isVisible: false,
      title: null
    };
    this.store.dispatch(new ActionPageHeaderVisibilityAndTitle(headerPage));
  }
}
