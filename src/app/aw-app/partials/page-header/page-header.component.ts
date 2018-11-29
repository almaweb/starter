import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectSettingsPageHeader } from '@app/settings';
import { HeaderPage } from '@app/aw-app/aw.models';

@Component({
  selector: 'aw-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit {
  hasElevation = false;
  pageHeader$: Observable<any>;
  pageHeaderA$: Observable<any>;
  isvisibleHeader: boolean;
  isvisibleHeaderA: boolean;
  setHeaderA: {};
  titleHeader: string;

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.pageHeader$ = this.store.pipe(select(selectSettingsPageHeader));
    this.pageHeader$.subscribe(state => {
      this.isvisibleHeader = state.isVisible;
      this.titleHeader = state.title;
    });
    this.pageHeaderA$ = this.store.pipe(
      select(selectSettingsPageHeader),
      map(st => {
        (this.isvisibleHeader = st.isVisible), (this.titleHeader = st.title);
      })
    );
    // console.log(this.pageHeaderA$)
  }
}
