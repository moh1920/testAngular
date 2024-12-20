import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StageService } from '../services/stage.service';
import { Stage } from '../core/models/Stage';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent {

  listStage! : Stage[];
  filteredStages : Stage[] = [];
  searchKeyword : string = '';
  constructor(private stagesService: StageService, private router :Router , private activeRoute : ActivatedRoute){}



  ngOnInit(): void {
     this.stagesService.getAllStages().subscribe(
      (stage : Stage[]) =>{
        this.listStage = stage;
      }
     );

  }
  getAllStages(): void {
    this.stagesService.getAllStages().subscribe(stages => {
      this.filteredStages = stages;
    });
  }

  filterStages(): void {
    if (this.searchKeyword.trim() === '') {
      this.getAllStages();
    } else {
      this.stagesService.filterStages(this.searchKeyword).subscribe(stages => {
        this.filteredStages = stages;
      });
    }
  }
  deleteStage(id: number): void {
    this.stagesService.deleteStage(id).subscribe(() => {
      this.filteredStages = this.filteredStages.filter(stage => stage.id !== id);
    });
  }




}
