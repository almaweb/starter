import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { AwRoutingModule } from './aw-routing.module';

@NgModule({
  imports: [SharedModule, AwRoutingModule],
  declarations: [AboutComponent, FeaturesComponent]
})
export class AwAppModule {}
