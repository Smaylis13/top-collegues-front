import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  collegues:Array<Collegue>
  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues()
    .then(cols => this.collegues = cols)
  }
  jaime(pCollegue:Collegue){
    this.collegueService.aimerUnCollegue(pCollegue).then(col => {
      pCollegue.score = col.score
    })
  }

  jeDeteste(pCollegue:Collegue){
    this.collegueService.detesterUnCollegue(pCollegue).then(col => {
      pCollegue.score = col.score
    })
  }
}
