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
  limite:number=1
  listfiltree:Collegue[]
  caract:string
  constructor(private collegueService: CollegueService) {  
  }

  ngOnInit() {
     
    this.collegueService.listerCollegues().subscribe((tab) =>  this.collegues = tab)
    this.caract = ""
    this.limite = 4
  }
  /**
   * change combien de personnes on veut voir 
   * @param  number
   */
  onKeyUp($event){
    if($event.target.value == ""){
        this.limite = this.collegues.length
    }
    else{
          this.limite = $event.target.value
        }
      }
  onKeyUpFilter($event){
   this.caract =  $event.target.value
  }

}
