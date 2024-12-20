import { Component } from '@angular/core';
import { StageService } from '../services/stage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../core/models/Stage';

@Component({
  selector: 'app-details-stage',
  templateUrl: './details-stage.component.html',
  styleUrls: ['./details-stage.component.css']
})
export class DetailsStageComponent {

  stageDetais!: Stage ;
  constructor(private stageService : StageService,private router:ActivatedRoute) {}
  ngOnInit(): void {

    const stageId = Number(this.router.snapshot.paramMap.get('id'));

    this.stageService.getStageById(stageId).subscribe(
      stage => {
        this.stageDetais = stage ;
      }
    )

  }

}
