import { Component, OnInit , Input} from '@angular/core';
import {Collegue} from '../../app/shared/domain/collegue'
import {CollegueService} from '../../app/shared/service/collegue.service'
@Component({
  selector: 'app-tableau-collegue',
  templateUrl: './tableau-collegue.component.html',
  styleUrls: ['./tableau-collegue.component.css']
})
export class TableauCollegueComponent implements OnInit {

  collegues:Array<Collegue>
  
  
  constructor(public collegueService:CollegueService) { }

  ngOnInit() {
    
    this.collegueService.listerCollegues().then((tab)=>{this.collegues=tab})
    //console.log(this.collegues)
    
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
