import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCricketComponent } from './create-cricket/create-cricket.component';
import { CricketDetailsComponent } from './cricket-details/cricket-details.component';
import { CricketListComponent } from './cricket-list/cricket-list.component';
import { UpdateCricketComponent } from './update-cricket/update-cricket.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { CricketInfoComponent } from './cricket-info/cricket-info.component';
import { CricketSquadComponent } from './cricket-squad/cricket-squad.component';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';
import { InformationComponent } from './information/information.component';
import { CricketTicketsComponent } from './cricket-tickets/cricket-tickets.component';
import { StandSelectionComponent } from './stand-selection/stand-selection.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';



@NgModule({
  declarations: [
    AppComponent,
    CreateCricketComponent,
    CricketDetailsComponent,
    CricketListComponent,
    UpdateCricketComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    CricketInfoComponent,
    CricketSquadComponent,
    UpcomingMatchComponent,
    InformationComponent,
    CricketTicketsComponent,
    StandSelectionComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
