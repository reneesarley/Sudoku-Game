import { Observable, of } from 'rxjs/Observable';

export class NumberInput {
  guess: number;
  notes: number[] = [];
  correct: boolean;
  currentMode: string;


  // setCurrentMode(): Observable<any>{
  //   if(this.notes.length == 0){
  //     return 9;
  //   } else{
  //     return 7;
  //   }


    // if (this.notes.length>0) {
    //     return this.guess;
    // } else {
    //     return this.guess;
    // }
  // }
  constructor(){

  }
}
