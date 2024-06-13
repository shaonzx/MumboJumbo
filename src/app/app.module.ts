import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesSubmitformComponent } from './parts/directives-submitform/directives-submitform.component';
import { UserPortfolioComponent } from './parts/user-portfolio/user-portfolio.component';
import { DecoratorsComponent } from './parts/decorators/decorators.component';
import { DecoratorsChildOneComponent } from './parts/decorators-child-one/decorators-child-one.component';
import { PipesComponent } from './parts/pipes/pipes.component';
import { SortArrayByPropertyPipe } from './libs/custom-pipes/sort-array-by-property.pipe';
import { HorizontalMenuComponent } from './parts/horizontal-menu/horizontal-menu.component';
import { ServiceDemoComponent } from './parts/service-demo/service-demo.component';
import { TemplateDrivenFormComponent } from './parts/template-driven-form/template-driven-form.component';

@NgModule({
  //exported classes needs to be declared here. cannot declare multiple times.
  declarations: [
    AppComponent,
    LayoutComponent,
    WelcomeComponent,
    DirectivesSubmitformComponent,
    UserPortfolioComponent,
    DecoratorsComponent,
    DecoratorsChildOneComponent,
    PipesComponent,
    SortArrayByPropertyPipe,
    HorizontalMenuComponent,
    ServiceDemoComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    //additionls modules needed to be declared before using them.
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  //for services and guards
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
