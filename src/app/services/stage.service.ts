import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../core/models/Stage';


@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = 'http://localhost:3000/stages';

  constructor(private http: HttpClient) {}
  addStage(stage: any): Observable<any> {
    return this.http.post(this.apiUrl, stage);
  }
  getAllStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl);
  }
  getStageById(id: number): Observable<Stage> {
    return this.http.get<Stage>(`${this.apiUrl}/${id}`);
  }
  filterStages(description: string): Observable<Stage[]> {
    return this.http.get<Stage[]>(`${this.apiUrl}?description_like=${description}`);
  }
  deleteStage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



}
