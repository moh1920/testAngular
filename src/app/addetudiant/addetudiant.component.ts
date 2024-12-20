import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent {

  etudiantForm = new FormGroup(
    {
      id: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    }
  )

  constructor(private serviceEtudiant : EtudiantService , private router: Router){}


  ngOnInit(): void {}

  onSubmit() {
    if (this.etudiantForm.valid) {
      this.serviceEtudiant.addEtudiant(this.etudiantForm.value).subscribe(() => {
        this.router.navigate(['/showEtudiant']);
      });
    }
  }
}
