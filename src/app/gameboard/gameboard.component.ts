import { Component, OnInit } from '@angular/core';
import { NumberInput } from '../number-input';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  solution: number[];
  playerInput:  NumberInput[] = [];
  difficultyLevels: number[] = [30, 27, 22];
  selectedDifficulty: string = 'easy';
  viewableSolution: number[] =[];
  // selectedNumber: number = 2;
  getNumberSet(): void{
    this.solution = [1,2,3,9,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9]
  }

  buildInitialGameboard(){
    for (let i = 0; i< this.solution.length; i++){
      let numberInput: NumberInput = new NumberInput;
      if(this.viewableSolution.includes(i)){
        numberInput.guess=this.solution[i];
      }
      this.playerInput.push(numberInput);
    }
  }

  setViewableSolution(){
    let randomIndex: number;
    let numbersShown: number;
    let counter: number = 0;
    if(this.selectedDifficulty === 'easy'){
      numbersShown = 50;
    }
    while(counter<numbersShown){
      randomIndex = Math.floor(Math.random() * 80) + 0;
      console.log("initial randomIndex" + randomIndex);
      if(!this.viewableSolution.includes(randomIndex){
        this.viewableSolution.push(randomIndex);
        console.log();
        counter ++
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.getNumberSet();
    this.setViewableSolution();
    this.buildInitialGameboard();

  }
}
