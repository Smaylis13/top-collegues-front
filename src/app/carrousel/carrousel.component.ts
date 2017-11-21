import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import {StateService } from '../shared/status-server/state.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  collegues:Array<Collegue>
  etat:boolean
  constructor(private collegueService:CollegueService, private statusService:StateService) { }

  ngOnInit() {
    this.collegueService.listerCollegues()
    .subscribe(cols => this.collegues = cols)
    // Etat 
    this.statusService.state().subscribe(val => this.statusService.subject.subscribe(data =>this.etat=data))
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
