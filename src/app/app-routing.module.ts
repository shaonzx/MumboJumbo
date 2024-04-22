import { LayoutComponent } from './layout/layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  //{ component: LayoutComponent, path: '' },
  {
    component: LayoutComponent,
    path: '',
    children: [{ component: WelcomeComponent, path: 'welcome' }],
  },
  //{ component: WelcomeComponent, path: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
