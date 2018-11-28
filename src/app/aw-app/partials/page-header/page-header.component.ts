import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectSettingsPageHeader } from '@app/settings';

@Component({
  selector: 'aw-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit {
  hasElevation = false;
  pageHeader$: Observable<any>;

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.pageHeader$ = this.store.pipe(select(selectSettingsPageHeader));
  }
}
