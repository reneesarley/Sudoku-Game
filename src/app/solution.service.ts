import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// import { of } from 'rxjs';
import { Observable } from "rxjs/Observable";
// import 'rxjs/add/operator/map';
// import "rxjs/add/operator/catch";
// import "../../node_modules/rxjs/add/observable/throw";
import { SOLUTIONS } from './solutions';
import Solution from './solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  solutions: FirebaseListObservable<any[]>;
  test: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.solutions = database.list('solutions');
    this.test = database.object('solutions/0/Test');
  }

  getSolution(){
    let solution = this.database.object('solutions/0/test');
    return solution;
  }

}
