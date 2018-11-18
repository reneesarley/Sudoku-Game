import { Injectable } from '@angular/core';
import { SOLUTIONS } from './solutions';
import { Solution } from './solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor() { }

  getSolutions(): Solution[]{
    return SOLUTIONS;
  }
}
