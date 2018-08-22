import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StatisticsWatcher } from './statistics.watcher';

import { Collection } from '../models/collection.model';
import { Result } from '../models/result.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  loaded: boolean = false;
  
  computingWatcher: StatisticsWatcher = new StatisticsWatcher();
  computingFunctions = [
    'watchLog',
    'watchTotal',
    'watchAdolescents',
    'watchUnlicensed',
    'watchUnlicensed',
    'watchFirstTimers',
    'watchTargetables',
    'watchTargetableDrifters',
    'watchTargetableFWDorDontKnow',
    'watchTargetableAverageBMWsDriven',
    'watchModelDistribution',
  ];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get<Collection>('/api/survey/results', httpOptions)
      .subscribe(result => this.computeResults(result.entry as Result[]));
  }

  formatPercent(percentage: number) {
    return Math.round(percentage);
  }

  computeResults(results: Result[]) {
    for (var i in results) {
      var result:Result = results[i];
      for (var j in this.computingFunctions) {
        var fn = this.computingFunctions[j]
        this.computingWatcher[fn](result);
      }
    }
    this.loaded = true;
  }

}
