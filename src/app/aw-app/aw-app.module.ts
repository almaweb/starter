import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { AwRoutingModule } from './aw-routing.module';
import { PageHeaderComponent } from './partials/page-header/page-header.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [SharedModule, AwRoutingModule],
  declarations: [
    AboutComponent,
    FeaturesComponent,
    PageHeaderComponent,
    UsersComponent
  ],
  exports: [PageHeaderComponent]
})
export class AwAppModule {}
