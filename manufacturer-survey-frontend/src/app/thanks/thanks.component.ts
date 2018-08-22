import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThanksLanguage } from './thanks.language';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  messages: string[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    var messageId = this.route.snapshot.paramMap.get('message');
    console.log(messageId);
    if ((messageId === null) ||
        (ThanksLanguage.messages[messageId] === undefined)
    ) {
      this.messages = ThanksLanguage.default;
    } else {
      this.messages = ThanksLanguage.messages[messageId];
    }
  }

}
