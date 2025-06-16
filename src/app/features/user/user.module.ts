import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PlayerListComponent } from './components/player-list/player-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TeamListComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
