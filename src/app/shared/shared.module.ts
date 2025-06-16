import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    TeamCardComponent,
    PlayerCardComponent,
    NavbarComponent,
    TeamFormComponent,
    PlayerFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
