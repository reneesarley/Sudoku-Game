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
  viewableSolution: number[] = [3,9,71]
  // selectedNumber: number = 2;
  getNumberSet(): void{
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

  initialPlayerInput(){
    for (let i = 0; i< this.solution.length; i++){
      let numberInput: NumberInput = new NumberInput;
      if(this.viewableSolution.includes(i)){
        console.log('in the if statement')
        numberInput.guess=this.solution[i];
        console.log("the numberInput guess =" + numberInput.guess)
      }
      this.playerInput.push(numberInput);
    }
    console.log(this.playerInput.length)
  }

  constructor() {
  }

  ngOnInit() {
    this.getNumberSet();
    this.initialPlayerInput();

  }
}
