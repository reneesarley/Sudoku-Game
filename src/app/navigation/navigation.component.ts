import { Component, OnInit, ViewChild } from '@angular/core';
import { SolutionService } from '../solution.service'
import { Observable } from 'rxjs/Observable';
import { GameboardComponent } from '../gameboard/gameboard.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent implements OnInit {
  @ViewChild(GameboardComponent) child: GameboardComponent;
  difficultyLevel: string ;

  constructor(private service: SolutionService) {

  }

  startNewGame(difficultyLevel: string){
    this.difficultyLevel = difficultyLevel;
    this.child.startNewGame(difficultyLevel);
  }

  ngOnInit() {
  }

}
