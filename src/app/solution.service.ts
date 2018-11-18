import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SOLUTIONS } from './solutions';
import { Solution } from './solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor() { }

  getSolutions(): Observable<Solution[]>{
    return of(SOLUTIONS);
  }
}
