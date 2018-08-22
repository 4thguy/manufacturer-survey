export class SurveyLanguage {
  static yesNoAnswers: string[] = [
    'Yes',
    'No'
  ];

  static step: string[] = [
    '',
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
  ];

  static buttons = {
    next: 'Next',
    finish: 'Finish',
  };

  static introLetter: string[] = [
    'Dear valued client',
    'As the current CEO of BMW, I want to thank you for giving us the opportunity to serve you. Please help us by taking a couple of minutes to tell us about your experience through this customer satisfaction survey. We appreciate your business and want to make sure we meet your expectations.',
    'Sincerely,<br/>Harald Krueger',
  ];

  static ageQuestion: string = 'Age';

  static genderQuestion: string = 'Gender';
  static genderAnswers: string[] = [
    'Male',
    'Female',
    'Other',
  ];

  static haveLicenseQuestion: string = 'Do you own a car driving license?';
  static haveLicenseAnswers: string[] = [
    'Yes',
    'No, I prefer using other transport',
  ];

  static firstCarQuestion: string = 'Is this your first car?';
  static firstCarAnswers = SurveyLanguage.yesNoAnswers;

  static driveTrainQuestion: string = 'Which drivetrain do you prefer?';
  static driveTrainAnswers: string[] = [
    'FWD',
    'RWD',
    'I don’t know',
  ];

  static driftingQuestion: string = 'Do you care about drifting?';
  static driftingAnswers = SurveyLanguage.yesNoAnswers;

  static bmwsDrivenQuestion: string = 'How many BMWs did you drive?';

  static bmwsWhichDrivenQuestion = 'Which BMW did you drive?';

  static bmwModelRegex = RegExp('([M|m][0-9]{3}[D|d|I|i])|(([X|x]|[Z|z])[0-9])');

}
