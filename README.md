# _Sudoku Game_

#### _A Sudoku Game, 11/14/18_

#### _**Renee Sarley**_

## Description

_This application will function like a traditional Sudoku game. Each 3x3 square, each row and each column will have each digit from 1-9, digits cannot be duplicated within a 3x3 square, row or column. Users can toggle between typing notes or actual guesses within each square. Guesses will be checked once typed. Notes will be ignored until converted to guesses. If a guess is incorrect it will be colored red, if it is correct it will be colored green. Once the board is filled in with all the correct guesses the player wins._

## Setup/Installation Requirements

* _Download the github repo_
* _Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`._

## User Stories - MVP

* _A user should be able to type a 'guess' digit into the square and have the digit be checked for accuracy_
* _A user should be able to toggle between making notes and making guesses_
* _A user should be able to type a 'note' digit into the square and not have the digit be checked for accuracy_
* _A user should be able to enter up to 9 different 'note' digits into a box_
* _A user should be able to generate a new game_
* _A user should see some digits filled in when the game starts_

## User Stories - Additional features for future implementation

* _A user should see a timer for the game_
* _A user should be able to change the difficulty of the game_
* _A user should be able to see which digits are still left to be used_
* _A user should be able to see which digits have been completely used (already on the board 9 times)_
* _A user should see like digits highlighted when they click on a certain digit. I.e. click on a two, the other twos on the board will be highlighted._

## Known Bugs

_Adding correct guess to numberInput throws error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'ng-untouched: true'. Current value: 'ng-untouched: false'._

## Support and contact details

_Please email with any questions._

## Technologies Used

* _TypeScript_
* _Angular_
* _Bootstrap_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **_Renee Sarley_**




# SudokuGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
