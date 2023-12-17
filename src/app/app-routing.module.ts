import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BfcComponent } from './components/bfc/bfc.component';
import { BikeodysseyComponent } from './components/bikeodyssey/bikeodyssey.component';
import { BlancheComponent } from './components/blanche/blanche.component';
import { GoceryComponent } from './components/gocery/gocery.component';
import { HomeComponent } from './components/home/home.component';
import { KireiComponent } from './components/kirei/kirei.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InterlinkedComponent } from './components/interlinked/interlinked.component';
import { SilpluginComponent } from './components/silplugin/silplugin.component';
import { CannonmotorsComponent } from './components/cannonmotors/cannonmotors.component';
import { InterlinkedNewComponent } from './components/interlinked-new/interlinked-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'bfc-olongapo', component: BfcComponent },
  { path: 'gocery', component: GoceryComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'bikeodyssey', component: BikeodysseyComponent },
  { path: 'blanche', component: BlancheComponent },
  { path: 'kireivalorant', component: KireiComponent },
  { path: 'interlinked', component: InterlinkedComponent },
  { path: 'searchitlocal', component: SilpluginComponent },
  { path: 'cannonmotors', component: CannonmotorsComponent },
  { path: 'interlinked-new', component: InterlinkedNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
