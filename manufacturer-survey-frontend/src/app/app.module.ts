import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SurveyComponent } from './survey/survey.component';
import { ThanksComponent } from './thanks/thanks.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ThanksComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
