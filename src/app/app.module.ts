import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { NumberBoxComponent } from './number-box/number-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    NumberBoxComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
