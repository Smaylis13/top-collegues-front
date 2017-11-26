import { Component } from '@angular/core';
// TODO importer la classe Collegue
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {environment} from '../environments/environment'
import {StateService} from './shared/status-server/state.service'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {

  //collegues:Array<Collegue>;
  subject:Subject<Collegue[]> = new BehaviorSubject([])
  serverStatus:Subject<number> = new Subject<number>()
  etat:boolean=false
  
  
 constructor(private collegueService:CollegueService, private _http: HttpClient, private statusService:StateService) {
 }

 ngOnInit() {
 
  //this.collegueService.listerCollegues().subscribe((tab)=>console.log(tab)) //this.collegues=tab)  
  this.statusService.state()// il faut le lancer une fois 
  this.statusService.subject.subscribe(val => {  this.etat = val})

}

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement, toastSuccess:HTMLInputElement){

    
       if (pseudo.value != ""  &&  imageUrl.value !=""){
        let collegue= new Collegue(pseudo.value,imageUrl.value,0)
                
      //this.collegueService.sauvegarder(collegue).subscribe(col =>{
      //  this.collegues.push(collegue)
    //  })
        toastSuccess.className = "alert alert-success";
        toastSuccess.innerHTML = `Le collègue <strong>${pseudo.value} </strong>a été ajouté avec  succès`
        pseudo.value=""
        imageUrl.value=""
        toastSuccess.style.visibility = 'visible'
        setTimeout(function(){toastSuccess.style.visibility = 'hidden'},3000);
        return false;
    }else{
      toastSuccess.className = "alert alert-danger";
      toastSuccess.innerHTML = `Erreur vous devez saisir un pseudo et une URL`
      toastSuccess.style.visibility = 'visible'
      setTimeout(function(){toastSuccess.style.visibility = 'hidden'},3000);
      return false;
    }
    return false;
  }
}