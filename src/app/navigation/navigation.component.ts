import { Component, OnInit, ViewChild } from '@angular/core';
import { SolutionService } from '../solution.service'
import { Observable } from 'rxjs/Observable';
import { GameboardComponent } from '../gameboard/gameboard.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // directives: [GameboardComponent]
})
export class NavigationComponent implements OnInit {
  @ViewChild(GameboardComponent) child: GameboardComponent;
  difficultyLevel: string;
  currentGame: GameboardComponent;

  constructor(private service: SolutionService) { }

  // startGame(difficultyLevel: Observable<string>){
  //   this.service.setDifficultyLevel(difficultyLevel);
  // }

  startNewGame(difficultyLevel: string){
    // this.child.endGame();
    this.difficultyLevel = difficultyLevel;
    this.child.startNewGame(difficultyLevel);

    // this.service.setLevel(difficultyLevel);
    console.log(difficultyLevel);
  }

  ngOnInit() {
  }

}
