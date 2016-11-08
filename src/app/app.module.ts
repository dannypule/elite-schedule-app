import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { GamePage } from '../pages/game/game.page';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TeamDetailPage } from '../pages/team-detail/team-detail.page';
import { TeamsPage } from '../pages/teams/teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments.page';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    MyTeamsPage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage
  ],
  providers: []
})
export class AppModule {}
