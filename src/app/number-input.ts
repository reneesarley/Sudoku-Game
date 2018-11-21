import { Observable, of } from 'rxjs/Observable';

export class NumberInput {
  guess: number;
  notes: number[] = [1,2,3,4,5,6,7,8,9];
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
