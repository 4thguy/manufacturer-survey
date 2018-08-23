import { Result } from '../models/result.model';

import { SurveyLanguage } from '../survey/survey.language';

export class StatisticsWatcher {
  static calculatePercentage(number: number, total: number): number {
    return number / total * 100;
  }

  static isTargetable(result: Result): boolean {
    return result.age >= 18;
  }

  static driveBMW(result: Result): boolean {
    return result.bmwsDriven > 0;
  }

  watchLog(result: Result) {
    console.log(result);
  }

  total: number = 0;
  watchTotal(result: Result) {
    this.total++;
  }

  adolescents:number = 0;
  adolescentsPercent: number = 0;
  watchAdolescents(result: Result) {
    if (result.age < 18) {
      this.adolescents++;
    }
    this.adolescentsPercent = StatisticsWatcher.calculatePercentage(this.adolescents, this.total);
  }

  static haveLicenseYes = SurveyLanguage.haveLicenseAnswers.indexOf('Yes');
  unlicensed: number = 0;
  unlicensedPercent: number = 0;
  watchUnlicensed(result: Result) {
    if (result.haveLicense === StatisticsWatcher.haveLicenseYes) {
      this.unlicensed++;
    }
    this.unlicensedPercent = StatisticsWatcher.calculatePercentage(this.unlicensed, this.total);
  }

  firstTimers: number = 0;
  firstTimersPercent: number = 0;
  watchFirstTimers(result: Result) {
    if ((result.age >= 18) && (result.age <= 25)) {
      this.firstTimers++;
    }
    this.firstTimersPercent = StatisticsWatcher.calculatePercentage(this.firstTimers, this.total);
  }

  targetables: number = 0;
  targetablesPercent: number = 0;
  watchTargetables(result: Result) {
    if (StatisticsWatcher.isTargetable(result)) {
      this.targetables++;
    }
    this.targetablesPercent = StatisticsWatcher.calculatePercentage(this.targetables, this.total);
  }

  static driftingYes = SurveyLanguage.driftingAnswers.indexOf('Yes');
  targetableDrifters: number = 0;
  targetableDriftersPercentage: number = 0;
  watchTargetableDrifters(result: Result) {
    if (StatisticsWatcher.isTargetable(result)) {
      if (result.drifting === StatisticsWatcher.driftingYes) {
        this.targetableDrifters++;
      }
      this.targetableDriftersPercentage = StatisticsWatcher.calculatePercentage(this.targetableDrifters, this.total);
    }
  }

  static driveTrainRWD = SurveyLanguage.driveTrainAnswers.indexOf('RWD');
  targetableFWDorDontKnow: number = 0;
  targetableFWDorDontKnowPercentage: number = 0;
  watchTargetableFWDorDontKnow(result: Result) {
    if (StatisticsWatcher.isTargetable(result)) {
      if (result.driveTrain !== StatisticsWatcher.driveTrainRWD) {
        this.targetableFWDorDontKnow++;
      }
      this.targetableFWDorDontKnowPercentage = StatisticsWatcher.calculatePercentage(this.targetableFWDorDontKnow, this.total);
    }
  }

  totalBMWs: number = 0;
  totalBMWsDrivers: number = 0;
  averageBMWsPerDriver: number = 0;
  watchTargetableAverageBMWsDriven(result: Result) {
    if (StatisticsWatcher.isTargetable(result)) {
      if (StatisticsWatcher.driveBMW(result)) {
        this.totalBMWs += result.bmwsDriven;
        this.totalBMWsDrivers++;
        this.averageBMWsPerDriver = this.totalBMWs / this.totalBMWsDrivers;
      }
    }
  }

  modelsDrivenKeys = []
  modelsDrivenCount = [];
  modelsDrivenTotal: number = 0;
  modelsDrivenPercentage = [];
  watchModelDistribution(result: Result) {
    if (StatisticsWatcher.isTargetable(result)) {
      if (StatisticsWatcher.driveBMW(result)) {
        var bmwsWhichDriven = result.bmwsWhichDriven.split(',');
        this.modelsDrivenTotal += bmwsWhichDriven.length;
        for (var i in bmwsWhichDriven) {
          var model = bmwsWhichDriven[i].toUpperCase();
          if (this.modelsDrivenCount[model] === undefined) {
            this.modelsDrivenKeys.push(model);
            this.modelsDrivenCount[model] = 0;
            this.modelsDrivenPercentage[model] = 0;
          }
          this.modelsDrivenCount[model]++;
          this.modelsDrivenPercentage[model] = StatisticsWatcher.calculatePercentage(this.modelsDrivenCount[model], this.modelsDrivenTotal);
        }
      }
    }
  }
}
