import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { StoreModule } from '@ngrx/store';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { AwRoutingModule } from './aw-routing.module';
import { PageHeaderComponent } from './partials/page-header/page-header.component';
import { UsersComponent } from './users/users.component';
import { FEATURE_AW_NAME, reducers } from './awApp.state';
import { EffectsModule } from '@ngrx/effects';
import { AwEffects } from './aw.effects';

@NgModule({
  imports: [
    SharedModule,
    AwRoutingModule
    // StoreModule.forFeature(FEATURE_AW_NAME, reducers),
    // EffectsModule.forFeature([AwEffects])
  ],
  declarations: [
    AboutComponent,
    FeaturesComponent,
    PageHeaderComponent,
    UsersComponent
  ],
  exports: [PageHeaderComponent]
})
export class AwAppModule {}
