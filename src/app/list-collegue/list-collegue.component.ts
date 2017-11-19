import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-list-collegue',
  templateUrl: './list-collegue.component.html',
  styleUrls: ['./list-collegue.component.css']
})
export class ListCollegueComponent implements OnInit {

  collegues:Collegue[]
  //@Input() collegueService:CollegueService

  constructor(private collegueService: CollegueService) {
    //this.collegues=collegue
  
  }

  ngOnInit() {
    this.collegueService.listerCollegues().then((tab) => this.collegues = tab)
  }

}
