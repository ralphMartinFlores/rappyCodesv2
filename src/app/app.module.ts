import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BfcComponent } from './components/bfc/bfc.component';
import { GoceryComponent } from './components/gocery/gocery.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { BikeodysseyComponent } from './components/bikeodyssey/bikeodyssey.component';
import { BlancheComponent } from './components/blanche/blanche.component';
import { KireiComponent } from './components/kirei/kirei.component';
import { FooterComponent } from './components/footer/footer.component';
import { InterlinkedComponent } from './components/interlinked/interlinked.component';
import { SilpluginComponent } from './components/silplugin/silplugin.component';
import { CannonmotorsComponent } from './components/cannonmotors/cannonmotors.component';
import { InterlinkedNewComponent } from './components/interlinked-new/interlinked-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    BfcComponent,
    GoceryComponent,
    PlanetsComponent,
    BikeodysseyComponent,
    BlancheComponent,
    KireiComponent,
    FooterComponent,
    InterlinkedComponent,
    SilpluginComponent,
    CannonmotorsComponent,
    InterlinkedNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
