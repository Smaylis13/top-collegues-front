import { Component, OnInit , Input} from '@angular/core';
import {Collegue} from '../../app/shared/domain/collegue'
import {CollegueService} from '../../app/shared/service/collegue.service'
import {StateService} from '../shared/status-server/state.service'
@Component({
  selector: 'app-tableau-collegue',
  templateUrl: './tableau-collegue.component.html',
  styleUrls: ['./tableau-collegue.component.css']
})
export class TableauCollegueComponent implements OnInit {

  collegues:Array<Collegue>
  etat:boolean
  
  constructor(public collegueService:CollegueService, private statusService:StateService) { }

  ngOnInit() {
    
    this.collegueService.listerCollegues().subscribe((tab)=>{this.collegues=tab})
    this.statusService.state().subscribe(val => this.etat = val)
    
  }

  jaime(pCollegue:Collegue){
    console.log(pCollegue)
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
