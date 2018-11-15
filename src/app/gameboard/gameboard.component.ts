import { Component, OnInit } from '@angular/core';
import { PlayerInput } from './player-input';
import { NumberInput } from './number-input';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  numberSet: number[];
  playerInput:  NumberInput[]= [{guess: 20, notes:[1,2,3],correct:false;},
                        {guess: 4, notes:[1,2,3], correct:false}];
  // selectedNumber: number = 2;
  getNumberSet(): void{
    this.numberSet = [1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9,
                      1,2,3,4,5,6,7,8,9]
  }

  filterNumber(number: number){
    return number === 9;
  }

  constructor() { }

  ngOnInit() {
    this.getNumberSet();
  }

}
