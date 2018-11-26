import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@app/core';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'aw.menu.users' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'aw.menu.about' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'aw.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwRoutingModule {}
