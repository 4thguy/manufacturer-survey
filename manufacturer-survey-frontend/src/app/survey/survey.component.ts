import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StepEnum } from './step.enum';
import { StepStatusEnum } from './stepStatus.enum';
import { SurveyLanguage } from './survey.language';
import { SurveyValidate } from './survey.validate';

import { Result } from '../models/result.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  readonly StepEnum = StepEnum;
  readonly StepStatusEnum = StepStatusEnum;
  readonly SurveyLanguage = SurveyLanguage;
  readonly SurveyValidate = SurveyValidate;

  age: number;
  gender: number;

  haveLicense: number;

  firstCar: number;

  driveTrain: number;
  drifting: number;
  bmwsDriven: number;
  bmwsWhichDriven: string[];

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.currentStep = StepEnum.Step1;
    this.bmwsWhichDriven = [];
  }

  sendResult(step?: number): void {
    var pkg = {
      age: this.age,
      gender: this.gender,
      haveLicense: this.haveLicense,
      firstCar: this.firstCar,
      driveTrain: this.driveTrain,
      drifting: this.drifting,
      bmwsDriven: this.bmwsDriven,
      bmwsWhichDriven: this.bmwsWhichDriven,
    }
    this.http.post<any>('/api/survey', pkg, httpOptions)
      .subscribe(() => {
        if (step >= 0) {
          this.router.navigate(['thanks', step]);
        } else {
          this.router.navigate(['thanks']);
        }
      });
  }

  currentStep: StepEnum;
  nextStep(): void {
    switch (this.currentStep) {
      case StepEnum.Step1:
        this.currentStep = StepEnum.Step2;
        break;
      case StepEnum.Step2:
        switch (SurveyValidate.step2(this)) {
          case StepStatusEnum.Finish:
            this.sendResult();
            break;
          case StepStatusEnum.Valid:
            this.currentStep = StepEnum.Step3;
            break;
        }
        break;
      case StepEnum.Step3:
        switch (SurveyValidate.step3(this)) {
          case StepStatusEnum.Finish:
            this.sendResult(3);
            break;
          case StepStatusEnum.Valid:
            this.currentStep = StepEnum.Step4;
            break;
        }
        break;
      case StepEnum.Step4:
        switch (SurveyValidate.step4(this)) {
          case StepStatusEnum.Finish:
            this.sendResult();
            break;
          case StepStatusEnum.Valid:
            this.sendResult();
            break;
        }
        break;
      
      default:
        this.currentStep = StepEnum.Step1;
        break;
    }
  }
}
