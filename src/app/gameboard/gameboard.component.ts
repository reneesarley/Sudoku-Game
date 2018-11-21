import { Component, OnInit, Input } from '@angular/core';
import { NumberInput } from '../number-input';
import { SolutionService } from '../solution.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  @Input() level: string;
  solution: FirebaseListObservable<any[]>;
  playerInput: Observable<NumberInput[]> = [];
  selectedNumberBox: NumberInput;
  difficultyLevel: string;
  viewableSolution: number[]=[];
  gameWon: boolean = false;
  noteModeOn: boolean = true;

  startNewGame(difficultyLevel: string){

   this.playerInput = [];
   console.log('current playerInput is' + this.playerInput);
    this.difficultyLevel= difficultyLevel;
    this.solutionService.solutions.subscribe(solutions => {
      let randomIndex = Math.floor(Math.random() * solutions.length) + 0;
      this.solution = solutions[randomIndex].numbers;
      this.setViewableSolution();
      this.buildInitialGameboard();
    })
    this.currentGame= true;
  }

  setViewableSolution(){
    this.viewableSolution = [];
    let randomIndex: number;
    let numbersShown: number = 0;
    let counter: number = 0;
    if(this.difficultyLevel == 'easy'){
      numbersShown = 55;
    } else if(this.difficultyLevel == 'moderate'){
      numbersShown = 35;
    } else if(this.difficultyLevel == 'hard'){
      numbersShown = 25;
    }else if(this.difficultyLevel == 'reallyhard'){
      numbersShown = 20;
    }
    console.log(numbersShown)
    while(counter<numbersShown){
      randomIndex = Math.floor(Math.random() * 81) + 0;
      if(!this.viewableSolution.includes(randomIndex)){
        this.viewableSolution.push(randomIndex);
        counter = counter + 1;      }
    }
    console.log("the viewable solution is:")
    console.log(this.viewableSolution)
  }


  buildInitialGameboard(){
    for (let i = 0; i< 81; i++){
      let numberInput: NumberInput = new NumberInput;
      if(this.viewableSolution.includes(i)){
        numberInput.guess=this.solution[i];
        numberInput.correct=true;
      }
      this.playerInput.push(numberInput);
    }
  }

  toggleNotesWithGuess(noteMode: boolean){
    this.noteModeOn=noteMode;
    console.log(this.noteModeOn);
  }

  setSelectedNumberBox(selectedInputBox: NumberInput): void{
    this.selectedNumberBox = selectedInputBox;
    console.log(this.selectedNumberBox)
  }

  addNumberToNotes(selectedNumber: number){
    let currentNotes = this.selectedNumberBox.notes
    if(currentNotes.includes(selectedNumber)){
      let index = currentNotes.indexOf(selectedNumber)
      currentNotes.splice(index, 1);
    }else{
    this.selectedNumberBox.notes.push(selectedNumber);
    }
  }


  checkBoard(){
    console.log('checking board')
    let amountTrue: number = 0;
    if(this.solution != undefined){
      for(let i = 0; i< 80; i++){
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
  }

  constructor(private solutionService: SolutionService) {
    console.log(this.selectedInputBox)
  }

  ngDoCheck()	{
    this.checkBoard();
  }

  ngOnInit() {
    console.log(this.level);
    this.startNewGame('easy');
  }

}
