import { Component, OnInit } from '@angular/core';
import { NumberInput } from '../number-input';
import { SOLUTIONS } from '../solutions';

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
  selectedNumber: NumberInput;
  gameWon: boolean = false;
  getSolution(): void{
    this.solution = SOLUTIONS[0].numbers;
  }

  buildInitialGameboard(){
    for (let i = 0; i< this.solution.length; i++){
      let numberInput: NumberInput = new NumberInput;
      if(this.viewableSolution.includes(i)){
        numberInput.guess=this.solution[i];
        numberInput.correct=true;
      }
      this.playerInput.push(numberInput);
    }
  }

  setViewableSolution(){
    let randomIndex: number;
    let numbersShown: number;
    let counter: number = 0;
    if(this.selectedDifficulty === 'easy'){
      numbersShown = 79;
    } else if(this.selectedDifficulty === 'medium'){
      numbersShown = 35;
    } else if(this.selectedDifficulty === 'hard'){
      numbersShown = 25;
    }
    while(counter<numbersShown){
      randomIndex = Math.floor(Math.random() * 81) + 0;
      if(!this.viewableSolution.includes(randomIndex)){
        this.viewableSolution.push(randomIndex);
        counter ++
      }
    }
  }

  checkBoard(){
    let amountTrue: number = 0;
    for(let i = 0; i< this.solution.length; i++){
      if(this.solution[i] == this.playerInput[i].guess){
        this.playerInput[i].correct = true;
        amountTrue ++;
      }
    else if(this.playerInput[i].guess != this.solution[i] && this.playerInput[i].guess != undefined){
        this.playerInput[i].correct = false;
      }
    }
    if(amountTrue == 81){
      this.gameWon = true;
      console.log('winning game')
    }
  }

  constructor() {
  }

  ngDoCheck()	{
    this.checkBoard();
  }

  ngOnInit() {
    this.getSolution();
    this.setViewableSolution();
    this.buildInitialGameboard();
  }
}
