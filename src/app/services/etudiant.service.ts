import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = 'http://localhost:3000/etudiants'; // URL du serveur JSON

  constructor(private http: HttpClient) {}

  // Ajouter un étudiant
  addEtudiant(etudiant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, etudiant);
  }

}
