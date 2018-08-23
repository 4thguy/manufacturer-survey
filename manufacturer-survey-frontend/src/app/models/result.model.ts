export class Result {
  age: number;
  gender: number;
  haveLicense: number;
  firstCar: number;
  driveTrain: number;
  drifting: number;
  bmwsDriven: number;
  bmwsWhichDriven: string;

  constructor(
    age: number,
    gender: number,
    haveLicense: number,
    firstCar: number,
    driveTrain: number,
    drifting: number,
    bmwsDriven: number,
    bmwsWhichDriven: string,
    ) {
    this.age = age;
    this.gender = gender;
    this.haveLicense = haveLicense;
    this.firstCar = firstCar;
    this.driveTrain = this.driveTrain;
    this.drifting = this.drifting;
    this.bmwsDriven = this.bmwsDriven;
    this.bmwsWhichDriven = this.bmwsWhichDriven;
  }
}
