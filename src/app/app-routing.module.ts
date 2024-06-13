import { LayoutComponent } from './layout/layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventObjectComponent } from './parts/event-object/event-object.component';
import { DirectivesComponent } from './parts/directives/directives.component';
import { DirectivesSubmitformComponent } from './parts/directives-submitform/directives-submitform.component';
import { UserPortfolioComponent } from './parts/user-portfolio/user-portfolio.component';
import { DecoratorsComponent } from './parts/decorators/decorators.component';
import { PipesComponent } from './parts/pipes/pipes.component';
import { HorizontalMenuComponent } from './parts/horizontal-menu/horizontal-menu.component';
import { ServiceDemoComponent } from './parts/service-demo/service-demo.component';
import { TemplateDrivenFormComponent } from './parts/template-driven-form/template-driven-form.component';

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
      { component: DecoratorsComponent, path: 'decorators' },
      { component: PipesComponent, path: 'pipes' },
      { path: 'horizontal-menu', component: HorizontalMenuComponent },
      { path: 'service-demo', component: ServiceDemoComponent },
      { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    ],
  },
  //{ component: WelcomeComponent, path: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
