import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCricketComponent } from './create-cricket/create-cricket.component';
import { CricketDetailsComponent } from './cricket-details/cricket-details.component';
import { CricketListComponent } from './cricket-list/cricket-list.component';
import { UpdateCricketComponent } from './update-cricket/update-cricket.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { CricketInfoComponent } from './cricket-info/cricket-info.component';
import { CricketSquadComponent } from './cricket-squad/cricket-squad.component';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';
import { InformationComponent } from './information/information.component';
import { CricketTicketsComponent } from './cricket-tickets/cricket-tickets.component';
import { StandSelectionComponent } from './stand-selection/stand-selection.component';


const routes: Routes = [
  {path: 'crickets', component: CricketListComponent},
  {path: 'create-cricket', component: CreateCricketComponent},
 // {path: '', redirectTo: 'crickets', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '', component: AdminLoginComponent},
  {path: 'admin-logout', component: AdminLogoutComponent},
  {path: 'cricket-squad', component: CricketSquadComponent},
  {path: 'cricket-info/:id', component: CricketInfoComponent},
  {path: 'update-cricket/:id', component: UpdateCricketComponent},
  {path: 'cricket-details/:id', component: CricketDetailsComponent},
  {path: 'upcoming-match', component: UpcomingMatchComponent},
  {path: 'information', component: InformationComponent},
  {path: 'cricket-tickets', component: CricketTicketsComponent},
  {path: 'stand-selection', component: StandSelectionComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
