import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})

export class SolutionService {
  solutions: FirebaseListObservable<any[]>;
  level: string;

  constructor(private database: AngularFireDatabase) {
    this.solutions = database.list('solutions');
  }

  setLevel(difficultyLevel: string){
    this.level = difficultyLevel;
  }

}
