import { StepStatusEnum } from './stepStatus.enum';
import { SurveyLanguage } from './survey.language';

export class SurveyValidate {
  static step2(data): StepStatusEnum {
    var toReturn = StepStatusEnum.Invalid;
    if (data.gender > -1) {
      toReturn = StepStatusEnum.Valid;
      if ((data.age >= 0) && (data.age <= 100)) {
        toReturn = StepStatusEnum.Valid;
        if (data.age < 18) {
          toReturn = StepStatusEnum.Finish
        }
      } else {
        toReturn = StepStatusEnum.Invalid;
      }
    }
    return toReturn;
  }
  static step3(data): StepStatusEnum {
    switch (data.haveLicense) {
      case 0:
      if ((data.age >= 18) && (data.age <=25)) {
        switch (data.firstCar) {
          case 0:
            return StepStatusEnum.Finish;
          case 1:
            return StepStatusEnum.Valid;
          default:
            return StepStatusEnum.Invalid;
        }
      } else {
        return StepStatusEnum.Valid;
      }
      case 1:
        return StepStatusEnum.Finish;
      default:
        return StepStatusEnum.Invalid;
    }
  }
  static step4(data): StepStatusEnum {
    var toReturn = StepStatusEnum.Invalid;
    if (data.driveTrain > -1) {
      if (data.drifting > -1) {
        if (data.bmwsDriven === 0) {
          toReturn = StepStatusEnum.Finish;
        } else {
          if (data.bmwsDriven > 0) {
            for (var i = 0; i < data.bmwsDriven; i++) {
              if ((data.bmwsWhichDriven[i] === null) ||
                  (data.bmwsWhichDriven[i] === undefined) ||
                  (!data.bmwsWhichDriven[i].match(SurveyLanguage.bmwModelRegex))
              ) {
                return StepStatusEnum.Invalid;
              }
            }
            toReturn = StepStatusEnum.Finish;
          }
        }
      }
    }
    return toReturn;
  }
}
