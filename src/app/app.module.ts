import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';
import { EventsComponent } from './events/events.component';

const myRoutes : Routes =[
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'join',
    component: JoinComponent
  },
  {
    path:'team',
    component: TeamComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path:'press',
    component:PressComponent
  },
  {
    path:'events',
    component:EventsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    JoinComponent,
    TeamComponent,
    ContactComponent,
    PressComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
