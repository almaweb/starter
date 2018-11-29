import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { Feature, features } from './features.data';
import { ActionPageHeaderVisibilityAndTitle } from '@app/settings';
import { Store } from '@ngrx/store';

@Component({
  selector: 'aw-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    const headerPage = {
      isVisible: true,
      title: 'aw.features.title'
    };
    this.store.dispatch(new ActionPageHeaderVisibilityAndTitle(headerPage));
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
