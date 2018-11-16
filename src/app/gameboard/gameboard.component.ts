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
  selectedDifficulty: string = 'hard';
  viewableSolution: number[] =[];
  // selectedNumber: number = 2;
  getSolution(): void{
    this.solution = [1,2,3,4,5,6,7,8,9,
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
      numbersShown = 50;
    } else if(this.selectedDifficulty === 'medium'){
      numbersShown = 35;
    } else if(this.selectedDifficulty === 'hard'){
      numbersShown = 25;
    }
    while(counter<numbersShown){
      randomIndex = Math.floor(Math.random() * 80) + 0;
      if(!this.viewableSolution.includes(randomIndex){
        this.viewableSolution.push(randomIndex);
        counter ++
      }
    }
  }

  checkGuess(input: NumberInput, index: number){
    console.log("players move "+this.playerInput[index].correct)
    console.log("solution is " + this.solution[index])
    if(this.playerInput[index].guess == this.solution[index]){
      console.log('matches')
      this.playerInput[index].correct = true;
      document.getElementById(index).addAttribute("class","correct");

      console.log(this.playerInput[index].correct)
    }
    this.playerInput[index].correct = false;
  }

  constructor() {
  }

  ngOnInit() {
    this.getSolution();
    this.setViewableSolution();
    this.buildInitialGameboard();
  }
}
