import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StagesComponent } from './stages/stages.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsStageComponent } from './details-stage/details-stage.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StagesComponent,
    AddStageComponent,
    NotFoundComponent,
    DetailsStageComponent,
    EtudiantComponent,
    AddetudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
