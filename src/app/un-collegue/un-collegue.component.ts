import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service'
import {ScorePipe} from '../shared/pipe/score.pipe'
@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue;
  constructor(private collegueService:CollegueService) {
  }

  ngOnInit() {
   
  }

  jaime(){
    this.collegueService.aimerUnCollegue(this.collegue).then(col => {
      this.collegue.score = col.score
    })
  }

  jeDeteste(){
    this.collegueService.detesterUnCollegue(this.collegue).then(col => {
      this.collegue.score = col.score
    })
  }

}
