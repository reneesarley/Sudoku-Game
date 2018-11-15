import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  numberSet: number[];
  selectedNumber: number = 2;
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
