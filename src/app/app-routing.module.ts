import { LayoutComponent } from './layout/layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventObjectComponent } from './parts/event-object/event-object.component';
import { DirectivesComponent } from './parts/directives/directives.component';
import { DirectivesSubmitformComponent } from './parts/directives-submitform/directives-submitform.component';
import { UserPortfolioComponent } from './parts/user-portfolio/user-portfolio.component';

const routes: Routes = [
  //{ component: LayoutComponent, path: '' },
  {
    component: LayoutComponent,
    path: '',
    children: [
      { component: WelcomeComponent, path: 'welcome' },
      { component: EventObjectComponent, path: 'event-object' },
      { component: DirectivesComponent, path: 'directives' },
      { component: DirectivesSubmitformComponent, path: 'dummy-submit-form' },
      { component: UserPortfolioComponent, path: 'user-portfolio' },
    ],
  },
  //{ component: WelcomeComponent, path: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
