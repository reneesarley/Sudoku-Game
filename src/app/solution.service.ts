import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SOLUTIONS } from './solutions';
import Solution from './solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http: HttpClient) { }

  getSolutions(): Observable<Solution[]>{
    return of(SOLUTIONS);
  }
}
