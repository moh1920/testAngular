import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StageService } from '../services/stage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent {

  // Définition du formulaire avec ses contrôles et valeurs par défaut
  stage = new FormGroup({
    titre: new FormControl('', [Validators.required]), // Champ requis
    description: new FormControl('', [Validators.required,Validators.minLength(3)]),
    entreprise: new FormControl('', [Validators.required]),
    disponible: new FormControl(true), // Valeur par défaut "true"
    nbrInteresse: new FormControl(0),  // Valeur par défaut "0"
  });

  constructor(private stageService : StageService,private router : Router){}

  onSubmit() {
   if (this.stage.valid) {
      this.stageService.addStage(this.stage.value).subscribe(() => {
        // Redirection vers le composant StagesComponent après l'ajout
        this.router.navigate(['/stages']);
      });
    }
  }

}
