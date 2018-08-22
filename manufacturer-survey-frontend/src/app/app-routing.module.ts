import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { SurveyComponent } from './survey/survey.component';
import { ThanksComponent } from './thanks/thanks.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/survey', pathMatch: 'full' },
  { path: 'survey', component: SurveyComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'thanks/:message', component: ThanksComponent },
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
