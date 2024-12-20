import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStageComponent } from './add-stage/add-stage.component';
import { StagesComponent } from './stages/stages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsStageComponent } from './details-stage/details-stage.component';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  {path: 'addStage', component:AddStageComponent},
  {path: 'stage', component:StagesComponent},
  {path: 'stage-details/:id', component:DetailsStageComponent},
  { path: '', redirectTo: '/addEtudiant', pathMatch: 'full' },
  {path: 'addetudiant', component:AddetudiantComponent},
  {path: 'showEtudiant', component:EtudiantComponent},
  {path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
